const configuration = {
  apiKey: '',
  titleApp: 'Document'
};

export const initApp = ({title = 'Document'}) => {
  document.title = title
  configuration.titleApp = title
};

export const appConfiguration = () => configuration;