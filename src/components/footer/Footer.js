function Footer() {
  const links = [
    {
      url: 'google.es',
      label: 'Enlace 1'
    },
    {
      url: 'google.en',
      label: 'Enlace 2'
    }
  ];

  const ListItem = ({url, value}) => {
    return <li><a href={url}>{value}</a></li>;
  };

  return (
    <footer className="footer u-padding">
       <ul>
       {links.map((link, index) =>
        <ListItem
          key={index}
          value={link.label}
          url={link.url} />
        )}
      </ul>

    </footer>
  );
}

export default Footer;
