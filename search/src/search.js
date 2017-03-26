/* globals React ReactDOM */

const { PureComponent } = React;

const extractFields = fields => xml => {
  return Object.keys(fields).reduce(
    (map, field) => {
      const type = fields[field];
      const element = xml.querySelectorAll(field);
      const { innerText } = element;
      switch (type) {
        case 'date': {
          return new Date(innerText);
        }
        case 'link': {
          return element.href;
        }
        default: {
          return innerText;
        }
      }
    },
    {}
  );
}

const Entry = extractTextFields({
  title: 'string',
  link: 'link',
  published: 'date',
  updated: 'date',
  id: 'string',
  content: 'string',
  summary: 'string'
});

const getSiteMap = () => new Promise((resolve, reject) => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', '/feed.xml');
  xhr.send();
  xhr.addEventListener('load', () => {
    resolve(xhr.responseXML);
  });
  xhr.addEventListener('error', reject);
});

const setPageState = (page, pageState) => ({ pages }) => ({
  ...pages,
  [page]: { ...pages[page], ...pageState }
});

class Search extends PureComponent {

  state = {
    open: true,
    query: '',
    pages: {},
    results: [],
  }

  componentDidMount() {
    getSiteMap()
    .then((siteMap) => {
      const entries = [...siteMap.querySelectorAll('entry')]
        .map(entry => {
          const { title, link, content } = Entry(entry);

        })
    });
  }

  search = (query) => {
    this.setState({ query });
    
  }

  render = () => {
    const { open, query, results } = this.state;
    return <div onClick={() => this.setState({ open: true })}>
      <input type="text" value={query} onChange={(e) => this.search(e.target.value)} placeholder="Search" />
      { open && <div>{
        results.map(({ title, href }, i) =>
            <a href={href}>{title}</a>
        )
      }</div> }
    </div>;
  }
}

ReactDOM.render(<Search />, document.querySelector('#search'));