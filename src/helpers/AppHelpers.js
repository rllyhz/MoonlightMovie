const _configuration = {
  name: 'Document',
  title: 'Document'
};

export const initApp = ({name = 'Document', title = ''}) => {
  const documentTitle = 
    (typeof(title) !== 'string' || title.length <= 0) ? name : title;

  setTitle(documentTitle);
  _configuration.name = name;
};

export const setTitle = (newTitle) => {
  _configuration.title = newTitle;
  document.title = newTitle;
}

export const appConfiguration = () => _configuration;