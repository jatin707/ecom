const SHOP_DATA = {
  staples: {
    id: 1,
    title: 'Staples',
    routeName: 'staples',
    items: [
      {
        id: 1,
        name: 'Asparagus',
        imageUrl: 'https://i.ibb.co/5cgJXkv/asparagus.jpg',
        price: 152
      },
      {
        id: 2,
        name: 'Avocado',
        imageUrl: 'https://i.ibb.co/2MLJ5cj/avocado.jpg',
        price: 181
      },
      {
        id: 3,
        name: 'Olives',
        imageUrl: 'https://i.ibb.co/bJRXrPs/olives.jpg',
        price: 153
      },
      {
        id: 4,
        name: 'Lettuce',
        imageUrl: 'https://i.ibb.co/xHjh7C5/lettuce.jpg',
        price: 125
      },
      {
        id: 5,
        name: 'Berries',
        imageUrl: 'https://i.ibb.co/1MCVYkP/berries.jpg',
        price: 218
      },
      {
        id: 6,
        name: 'Pepper',
        imageUrl: 'https://i.ibb.co/fv3DBYh/pepper.jpg',
        price: 214
      },
      {
        id: 7,
        name: 'Blackberry',
        imageUrl: 'https://i.ibb.co/rtZDpK9/blackberries.jpg',
        price: 118
      },
      {
        id: 8,
        name: 'Eggs',
        imageUrl: 'https://i.ibb.co/6r6dTzZ/eggs.jpg',
        price: 84
      }
      
    ]
  },
  nutsnseeds: {
    id: 2,
    title: 'nuts & seeds',
    routeName: 'nutsnseeds',
    items: [
      {
        id: 10,
        name: 'Almonds',
        imageUrl: 'https://i.ibb.co/GPBXYRf/almonds.jpg',
        price: 220
      },
      {
        id: 11,
        name: 'Pecan',
        imageUrl: 'https://i.ibb.co/MNVPcf9/pecan.jpg',
        price: 280
      },
      {
        id: 12,
        name: 'Pistachios',
        imageUrl: 'https://i.ibb.co/J3cpM10/pistachios.jpg',
        price: 110
      },
      {
        id: 13,
        name: 'Cashews',
        imageUrl: 'https://i.ibb.co/HHRYGrY/cashews.jpg',
        price: 160
      },
      {
        id: 14,
        name: 'Walnut',
        imageUrl: 'https://i.ibb.co/hMLtYBM/walnut.jpg',
        price: 160
      },
      {
        id: 15,
        name: 'Chia Seeds',
        imageUrl: 'https://i.ibb.co/1vYYx62/chiaseeds.jpg',
        price: 160
      },
      {
        id: 16,
        name: 'Pumpkin Seeds',
        imageUrl: 'https://i.ibb.co/L55mkGt/pumpkinseeds.jpg',
        price: 190
      },
      {
        id: 17,
        name: 'Sesame Seeds',
        imageUrl: 'https://i.ibb.co/4Fc6tNs/sesameseeds.jpg',
        price: 200
      }
    ]
  },
  bakery: {
    id: 3,
    title: 'Bakery',
    routeName: 'bakery',
    items: [
      {
        id: 18,
        name: 'Buns',
        imageUrl: 'https://i.ibb.co/G3qSqtf/buns.jpg',
        price: 125
      },
      {
        id: 19,
        name: 'Cheese',
        imageUrl: 'https://i.ibb.co/d0bq01P/cheese.jpg',
        price: 90
      },
      {
        id: 20,
        name: 'Coffee Beans',
        imageUrl: 'https://i.ibb.co/wSCqFdZ/coffee.jpg',
        price: 90
      },
      {
        id: 21,
        name: 'Cookies',
        imageUrl: 'https://i.ibb.co/HNm5jSd/cookies.jpg',
        price: 165
      },
      {
        id: 22,
        name: 'Chocolate',
        imageUrl: 'https://i.ibb.co/6BxZDfr/chocolateb.jpg',
        price: 185
      }
    ]
  },
  vegetarian: {
    id: 4,
    title: 'Vegetarian',
    routeName: 'vegetarian',
    items: [
      {
        id: 23,
        name: 'Keto Toast',
        imageUrl: 'https://i.ibb.co/ZLDsfY2/ketotoast.jpg',
        price: 55
      },
      {
        id: 24,
        name: 'Keto Salad',
        imageUrl: 'https://i.ibb.co/4dXQgb6/ketosalad.jpg',
        price: 200
      },
      {
        id: 25,
        name: 'Keto Wrap',
        imageUrl: 'https://i.ibb.co/ys67yQZ/ketowrap.jpg',
        price: 80
      },
      {
        id: 26,
        name: 'Keto Noodles',
        imageUrl: 'https://i.ibb.co/QN8NYgz/ketonoodles.jpg',
        price: 80
      },
      {
        id: 27,
        name: 'Keto Biryani',
        imageUrl: 'https://i.ibb.co/dJDb3m3/ketobiryani.jpg',
        price: 245
      },
      {
        id: 28,
        name: 'Keto Dosa',
        imageUrl: 'https://i.ibb.co/HDK6kcx/ketodosa.jpg',
        price: 135
      },
      {
        id: 29,
        name: 'Keto Thali',
        imageUrl: 'https://i.ibb.co/tcqGhcs/ketothali.jpg',
        price: 520
      }
    ]
  },
  nonvegetarian: {
    id: 5,
    title: 'Non vegetarian',
    routeName: 'nonvegetarian',
    items: [
      {
        id: 30,
        name: 'Fish Salad',
        imageUrl: 'https://i.ibb.co/BwwKz7m/fishsalad.jpg',
        price: 325
      },
      {
        id: 31,
        name: 'Egg Salad',
        imageUrl: 'https://i.ibb.co/CJ32rZg/eggsalad.jpg',
        price: 220
      },
      {
        id: 32,
        name: 'Seafood Salad',
        imageUrl: 'https://i.ibb.co/z4FcFjb/seafoodsalad.jpg',
        price: 225
      },
      {
        id: 33,
        name: 'Grassfed Meat',
        imageUrl: 'https://i.ibb.co/nnS13BM/grassfedmeat.jpg',
        price: 225
      },
      {
        id: 34,
        name: 'Biryani',
        imageUrl: 'https://i.ibb.co/8jbrKxs/biryani.jpg',
        price: 240
      },
      {
        id: 35,
        name: 'Non Veg Thali',
        imageUrl: 'https://i.ibb.co/5BvWBFm/nonvegthali.jpg',
        price: 525
      }
    ]
  }
};

export default SHOP_DATA;