import React from "react";

const countryZones = [
  {
    'gmt': -3,
    'countries': 'chile, argentina, brazil, uruguay',
  },
  {
    'gmt': -5,
    'countries': 'colombia, ecuador, peru',
  },
  {
    'gmt': -4,
    'countries': 'bolivia, paraguay, venezuela',
  },
  {
    'gmt': -7,
    'countries': 'mexico',
  },
  {
    'gmt': 2,
    'countries': 'usa',
  }
];

function CountryFlags(props) {
  console.log(props.countryName);
  return (
    <span className={`flag-${props.countryName.trim()}`}></span>
  );
}

function CountryTimesListItem(props) {
  const gmtItem = props.value;
  const countryFlags = gmtItem.countries.split(',').map((country) => {
    return <CountryFlags countryName={country} />
  });
  return (
    <li>
    <span className="flags">
    {countryFlags}
    </span>
    <span className="times">
    GMT {gmtItem.gmt.toString()}
    </span>
    </li>
  );
}

function CountryTimeList(props) {
  const gmtList = props.countryZones;
  const listItmes =gmtList.map((gmtItem) => {
    console.log("gmtItem kappa", gmtItem);
    return <CountryTimesListItem value={gmtItem} />
  });

  return (
    <ul className="is-size-6 stream-times">
      {listItmes}
    </ul>
  );
}



const CountrySchedule = () => (

  <CountryTimeList countryZones={countryZones} />
);

export default CountrySchedule;
