import React from 'react';

function TicketListItem (props) {

  //TO DO
  var time = props.searchItem.date.slice(11);
  console.log(time)
  var dateObject = new Date(Date.parse(props.searchItem.date));
  var dateReadable = dateObject.toDateString()
  console.log('tick list item props: ', dateReadable);
  var d = moment.utc(props.searchItem.date);
  var tm = d.local().format('h:mmA')
  // RENDER EACH ITEM IN A TABLE
  return (
          <tr className='tbl-row'>
            <td>{dateReadable + ' ' + tm}</td>
            <td>{props.searchItem.venueName}</td>
            <td>{props.searchItem.venueLocation}</td>
            <td>{props.searchItem.averagePrice}</td>
          </tr>
  )
}

export default TicketListItem;


