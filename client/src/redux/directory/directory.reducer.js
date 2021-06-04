const INITIAL_STATE = {
  sections: [
    {
      title: 'staples',
      imageUrl: 'https://i.ibb.co/RC6ZcMM/staples.jpg',
      id: 1,
      linkUrl: 'shop/staples'
    },
    {
      title: 'bakery',
      imageUrl: 'https://i.ibb.co/zGHRgYL/bakery.jpg',
      id: 2,
      linkUrl: 'shop/bakery'
    },
    {
      title: 'nuts & seeds',
      imageUrl: 'https://i.ibb.co/GTj1xTk/nuts-seeds.jpg',
      id: 3,
      linkUrl: 'shop/nutsnseeds'
    },
    {
      title: 'vegetarian',
      imageUrl: 'https://i.ibb.co/106L6nV/veg.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/vegetarian'
    },
    {
      title: 'nonvegetarian',
      imageUrl: 'https://i.ibb.co/sR5j1Xm/nonveg.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/nonvegetarian'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;