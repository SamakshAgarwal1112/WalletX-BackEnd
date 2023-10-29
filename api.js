const express =require('express');
const axios =require( 'axios');
const cors = require( 'cors');

const app = express();
app.use(cors());
const port = 3000;

app.use(express.static('public'));

let a = [[], [], [], [], [], [], [], [], [], []];

const Key = '6799c06e9dmshcb2966759bf9446p108737jsn0fa943090f74';
const Host = 'yahoo-finance15.p.rapidapi.com';

const options01 = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/AAPL/1d', //Apple Inc.
  params: {
    diffandsplits: 'false',
  },
  headers: {
    'X-RapidAPI-Key': Key,
    'X-RapidAPI-Host': Host,
  },
};

const options01_1 = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/sc/search/AAPL',
  headers: {
    'X-RapidAPI-Key': Key,
    'X-RapidAPI-Host': Host,
  },
};

const options02 = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/AXP/1d', //American express
  headers: {
    'X-RapidAPI-Key': Key,
    'X-RapidAPI-Host': Host,
  },
};

const options02_1 = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/sc/search/AXP',
  headers: {
    'X-RapidAPI-Key': Key,
    'X-RapidAPI-Host': Host,
  },
};

const options03 = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/BLK/1d', //Blackrock Inc.
  headers: {
    'X-RapidAPI-Key': Key,
    'X-RapidAPI-Host': Host,
  },
};

const options03_1 = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/sc/search/BLK',
  headers: {
    'X-RapidAPI-Key': Key,
    'X-RapidAPI-Host': Host,
  },
};

const options04 = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/MSFT/1d', //Microsoft
  headers: {
    'X-RapidAPI-Key': Key,
    'X-RapidAPI-Host': Host,
  },
};

const options04_1 = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/sc/search/MSFT',
  headers: {
    'X-RapidAPI-Key': Key,
    'X-RapidAPI-Host': Host,
  },
};
const options05 = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/TSLA/1d', //Tesla, Inc.
  headers: {
    'X-RapidAPI-Key': Key,
    'X-RapidAPI-Host': Host,
  },
};

const options05_1 = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/sc/search/TSLA',
  headers: {
    'X-RapidAPI-Key': Key,
    'X-RapidAPI-Host': Host,
  },
};
const options06 = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/AMZN/1d', //Amazon.com, Inc
  headers: {
    'X-RapidAPI-Key': Key,
    'X-RapidAPI-Host': Host,
  },
};

const options06_1 = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/sc/search/AMZN',
  headers: {
    'X-RapidAPI-Key': Key,
    'X-RapidAPI-Host': Host,
  },
};
const options07 = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/GOOG/1d', //Alphabet Inc.
  headers: {
    'X-RapidAPI-Key': Key,
    'X-RapidAPI-Host': Host,
  },
};

const options07_1 = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/sc/search/GOOG',
  headers: {
    'X-RapidAPI-Key': Key,
    'X-RapidAPI-Host': Host,
  },
};
const options08 = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/NKE/1d', //NIKE, Inc.
  headers: {
    'X-RapidAPI-Key': Key,
    'X-RapidAPI-Host': Host,
  },
};

const options08_1 = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/sc/search/NKE',
  headers: {
    'X-RapidAPI-Key': Key,
    'X-RapidAPI-Host': Host,
  },
};
const options09 = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/UBER/1d', //Uber Technologies, Inc.
  headers: {
    'X-RapidAPI-Key': Key,
    'X-RapidAPI-Host': Host,
  },
};

const options09_1 = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/sc/search/UBER',
  headers: {
    'X-RapidAPI-Key': Key,
    'X-RapidAPI-Host': Host,
  },
};
const options10 = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/NVDA/1d', //NVIDIA Corporation
  headers: {
    'X-RapidAPI-Key': Key,
    'X-RapidAPI-Host': Host,
  },
};

const options10_1 = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/sc/search/NVDA',
  headers: {
    'X-RapidAPI-Key': Key,
    'X-RapidAPI-Host': Host,
  },
};

(async () => { try {
  const response = await axios.request(options01);

  // for(let i=1695648600;i<=1695656700;i+=900)
  const itemsArray = Object.values(response.data.items);
  const lastElement = itemsArray.slice(-1)[0];
  console.log('Open:', lastElement.open);
  a[0][2] = lastElement.open;
  // const latestIndex=response.data.items.length;
  console.log(response.data.meta.regularMarketPrice);
  a[0][3] = response.data.meta.regularMarketPrice;
  console.log(response.data.meta.chartPreviousClose);
  a[0][1] = response.data.meta.chartPreviousClose;

  const totalElements = Object.keys(response.data.items).length;
  console.log('Total elements:', totalElements);
} catch (error) {
  console.error(error);
}})();
//options01_1
(async () => { try {
  const response = await axios.request(options01_1);

  console.log(response.data.body[0].name);
  a[0][0] = response.data.body[0].name;
  console.log(response.data.meta.processedTime);
  a[0][4] = response.data.meta.processedTime;
} catch (error) {
  console.error(error);
}})();

(async () => { try {
  const response = await axios.request(options02);

  // for(let i=1695648600;i<=1695656700;i+=900)
  const itemsArray = Object.values(response.data.items);
  const lastElement = itemsArray.slice(-1)[0];
  console.log('Open:', lastElement.open);
  a[1][2] = lastElement.open;
  // const latestIndex=response.data.items.length;
  console.log(response.data.meta.regularMarketPrice);
  a[1][3] = response.data.meta.regularMarketPrice;
  console.log(response.data.meta.chartPreviousClose);
  a[1][1] = response.data.meta.chartPreviousClose;

  const totalElements = Object.keys(response.data.items).length;
  console.log('Total elements:', totalElements);
} catch (error) {
  console.error(error);
}})();
//options02_1
(async () => { try {
  const response = await axios.request(options02_1);

  console.log(response.data.body[0].name);
  a[1][0] = response.data.body[0].name;
  console.log(response.data.meta.processedTime);
  a[1][4] = response.data.meta.processedTime;
} catch (error) {
  console.error(error);
}})();

(async () => { try {
  const response = await axios.request(options03);

  // for(let i=1695648600;i<=1695656700;i+=900)
  const itemsArray = Object.values(response.data.items);
  const lastElement = itemsArray.slice(-1)[0];
  console.log('Open:', lastElement.open);
  a[2][2] = lastElement.open;
  // const latestIndex=response.data.items.length;
  console.log(response.data.meta.regularMarketPrice);
  a[2][3] = response.data.meta.regularMarketPrice;
  console.log(response.data.meta.chartPreviousClose);
  a[2][1] = response.data.meta.chartPreviousClose;

  const totalElements = Object.keys(response.data.items).length;
  console.log('Total elements:', totalElements);
} catch (error) {
  console.error(error);
}})();
//options03_1
(async () => { try {
  const response = await axios.request(options03_1);

  console.log(response.data.body[0].name);
  a[2][0] = response.data.body[0].name;
  console.log(response.data.meta.processedTime);
  a[2][4] = response.data.meta.processedTime;
} catch (error) {
  console.error(error);
}})();

(async () => { try {
  const response = await axios.request(options04);

  // for(let i=1695648600;i<=1695656700;i+=900)
  const itemsArray = Object.values(response.data.items);
  const lastElement = itemsArray.slice(-1)[0];
  console.log('Open:', lastElement.open);
  a[3][2] = lastElement.open;
  // const latestIndex=response.data.items.length;
  console.log(response.data.meta.regularMarketPrice);
  a[3][3] = response.data.meta.regularMarketPrice;
  console.log(response.data.meta.chartPreviousClose);
  a[3][1] = response.data.meta.chartPreviousClose;

  const totalElements = Object.keys(response.data.items).length;
  console.log('Total elements:', totalElements);
} catch (error) {
  console.error(error);
}})();
//options04_1
(async () => { try {
  const response = await axios.request(options04_1);

  console.log(response.data.body[0].name);
  a[3][0] = response.data.body[0].name;
  console.log(response.data.meta.processedTime);
  a[3][4] = response.data.meta.processedTime;
} catch (error) {
  console.error(error);
}})();

(async () => { try {
  const response = await axios.request(options05);

  // for(let i=1695648600;i<=1695656700;i+=900)
  const itemsArray = Object.values(response.data.items);
  const lastElement = itemsArray.slice(-1)[0];
  console.log('Open:', lastElement.open);
  a[4][2] = lastElement.open;
  // const latestIndex=response.data.items.length;
  console.log(response.data.meta.regularMarketPrice);
  a[4][3] = response.data.meta.regularMarketPrice;
  console.log(response.data.meta.chartPreviousClose);
  a[4][1] = response.data.meta.chartPreviousClose;

  const totalElements = Object.keys(response.data.items).length;
  console.log('Total elements:', totalElements);
} catch (error) {
  console.error(error);
}})();
//options05_1
(async () => { try {
  const response = await axios.request(options05_1);

  console.log(response.data.body[0].name);
  a[4][0] = response.data.body[0].name;
  console.log(response.data.meta.processedTime);
  a[4][4] = response.data.meta.processedTime;
} catch (error) {
  console.error(error);
}})();

(async () => { try {
  const response = await axios.request(options06);

  // for(let i=1695648600;i<=1695656700;i+=900)
  const itemsArray = Object.values(response.data.items);
  const lastElement = itemsArray.slice(-1)[0];
  console.log('Open:', lastElement.open);
  a[5][2] = lastElement.open;
  // const latestIndex=response.data.items.length;
  console.log(response.data.meta.regularMarketPrice);
  a[5][3] = response.data.meta.regularMarketPrice;
  console.log(response.data.meta.chartPreviousClose);
  a[5][1] = response.data.meta.chartPreviousClose;

  const totalElements = Object.keys(response.data.items).length;
  console.log('Total elements:', totalElements);
} catch (error) {
  console.error(error);
}})();
//options06_1
(async () => { try {
  const response = await axios.request(options06_1);

  console.log(response.data.body[0].name);
  a[5][0] = response.data.body[0].name;
  console.log(response.data.meta.processedTime);
  a[5][4] = response.data.meta.processedTime;
} catch (error) {
  console.error(error);
}})();

(async () => { try {
  const response = await axios.request(options07);

  // for(let i=1695648600;i<=1695656700;i+=900)
  const itemsArray = Object.values(response.data.items);
  const lastElement = itemsArray.slice(-1)[0];
  console.log('Open:', lastElement.open);
  a[6][2] = lastElement.open;
  // const latestIndex=response.data.items.length;
  console.log(response.data.meta.regularMarketPrice);
  a[6][3] = response.data.meta.regularMarketPrice;
  console.log(response.data.meta.chartPreviousClose);
  a[6][1] = response.data.meta.chartPreviousClose;

  const totalElements = Object.keys(response.data.items).length;
  console.log('Total elements:', totalElements);
} catch (error) {
  console.error(error);
}})();
//options07_1
(async () => { try {
  const response = await axios.request(options07_1);

  a[6][0] = response.data.body[0].name;
  console.log(response.data.meta.processedTime);
  a[6][4] = response.data.meta.processedTime;
} catch (error) {
  console.error(error);
}})();

(async () => { try {
  const response = await axios.request(options08);

  // for(let i=1695648600;i<=1695656700;i+=900)
  const itemsArray = Object.values(response.data.items);
  const lastElement = itemsArray.slice(-1)[0];
  console.log('Open:', lastElement.open);
  a[7][2] = lastElement.open;
  // const latestIndex=response.data.items.length;
  console.log(response.data.meta.regularMarketPrice);
  a[7][3] = response.data.meta.regularMarketPrice;
  console.log(response.data.meta.chartPreviousClose);
  a[7][1] = response.data.meta.chartPreviousClose;

  const totalElements = Object.keys(response.data.items).length;
  console.log('Total elements:', totalElements);
} catch (error) {
  console.error(error);
}})();
//options08_1
(async () => { try {
  const response = await axios.request(options08_1);

  console.log(response.data.body[0].name);
  a[7][0] = response.data.body[0].name;
  console.log(response.data.meta.processedTime);
  a[7][4] = response.data.meta.processedTime;
} catch (error) {
  console.error(error);
}})();

(async () => { try {
  const response = await axios.request(options09);

  // for(let i=1695648600;i<=1695656700;i+=900)
  const itemsArray = Object.values(response.data.items);
  const lastElement = itemsArray.slice(-1)[0];
  console.log('Open:', lastElement.open);
  a[8][2] = lastElement.open;
  // const latestIndex=response.data.items.length;
  console.log(response.data.meta.regularMarketPrice);
  a[8][3] = response.data.meta.regularMarketPrice;
  console.log(response.data.meta.chartPreviousClose);
  a[8][1] = response.data.meta.chartPreviousClose;

  const totalElements = Object.keys(response.data.items).length;
  console.log('Total elements:', totalElements);
} catch (error) {
  console.error(error);
}})();
//options09_1
(async () => { try {
  const response = await axios.request(options09_1);

  console.log(response.data.body[0].name);
  a[8][0] = response.data.body[0].name;
  console.log(response.data.meta.processedTime);
  a[8][4] = response.data.meta.processedTime;
} catch (error) {
  console.error(error);
}})();

(async () => { 
  try {
    console.log('Before axios request for options10');
    const response = await axios.request(options10);

    // for(let i=1695648600;i<=1695656700;i+=900)
    const itemsArray = Object.values(response.data.items);
    const lastElement = itemsArray.slice(-1)[0];
    console.log('Open:', lastElement.open);
    a[9][2] = lastElement.open;
    // const latestIndex=response.data.items.length;
    console.log(response.data.meta.regularMarketPrice);
    a[9][3] = response.data.meta.regularMarketPrice;
    console.log(response.data.meta.chartPreviousClose);
    a[9][1] = response.data.meta.chartPreviousClose;

    const totalElements = Object.keys(response.data.items).length;
    console.log('Total elements:', totalElements);
    console.log('After axios request for options10');
  } catch (error) {
    console.error(error);
  }
})();

//options10_1
(async () => {      
  
  try {
    const response = await axios.request(options10_1);
    console.log(response.data.body[0].name);
    a[9][0] = response.data.body[0].name;
    console.log(response.data.meta.processedTime);
    a[9][4] = response.data.meta.processedTime;
  } catch (error) {
    console.error(error);
  }
  
})();

// console.log('hi');
app.get('', async (req, res) => {
  try { console.log('hi');
    const combinedData = {};
    for (let i = 0; i < 5; i++) {
      combinedData[`dataA${i}`] = a[0][i] !== undefined ? a[0][i] : null;
      combinedData[`dataB${i}`] = a[1][i] !== undefined ? a[1][i] : null;
      combinedData[`dataC${i}`] = a[2][i] !== undefined ? a[2][i] : null;
      combinedData[`dataD${i}`] = a[0][i] !== undefined ? a[3][i] : null;
      combinedData[`dataE${i}`] = a[1][i] !== undefined ? a[4][i] : null;
      combinedData[`dataF${i}`] = a[2][i] !== undefined ? a[5][i] : null;
      combinedData[`dataG${i}`] = a[0][i] !== undefined ? a[6][i] : null;
      combinedData[`dataH${i}`] = a[1][i] !== undefined ? a[7][i] : null;
      combinedData[`dataI${i}`] = a[2][i] !== undefined ? a[8][i] : null;
      combinedData[`dataJ${i}`] = a[2][i] !== undefined ? a[9][i] : null;
    }
    res.json(combinedData);
    console.log(combinedData);
  } catch (error) {
    console.error('Error fetching data', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3001, () => {
  console.log(`server is running on port 3001`);
});

