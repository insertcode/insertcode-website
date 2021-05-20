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

function CountryTimesListItem({gmtItem}) {
  const countryFlags = gmtItem.countries.split(',').map((country) => {
    return <span className={`flag-${country.trim()}`}></span>
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

const CountrySchedule = () => {
  const listItmes = countryZones.map((gmtItem) => {
    return <CountryTimesListItem gmtItem={gmtItem} />
  });

  return (
    <ul className="is-size-6 stream-times">
    {listItmes}
    </ul>
  );
}

export default CountrySchedule;
