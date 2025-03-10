const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;

app.get('/data', (req, res) => {
  const data = {
    suhumax: 36,
    suhumin: 21,
    suhurata: 28.35,
    nilai_suhu_max_humid_max: [
      {
        idx: 101,
        suhu: 36,
        humid: 36,
        kecerahan: 25,
        timestamp: "2010-09-18 07:23:48"
      },
      {
        idx: 226,
        suhu: 36,
        humid: 36,
        kecerahan: 27,
        timestamp: "2011-05-02 12:29:34"
      }
    ],
    month_year_max: [
      { month_year: "9-2010" },
      { month_year: "5-2011" }
    ]
  };

  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:3000`);
});
