// Robots
export const robots = (req, res) => {
  res.type('text/plain');
  res.send('User-agent: *\nDisallow: /');
};

// Index Route
export const index = (req, res) => {
  let viewData = {
    pageTitle: 'DVSA Node Starter Kit',
  };
  res.render('main/index', viewData);
};
