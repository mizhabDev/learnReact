const ListItem = ({ item, isIncluded }) => {
  
  return <li>{item} {isIncluded?'✔️':'❌'} <button onClick={() => handlingClick(item)}>click me</button></li>;
};

export const PackageDetails = () => {
  return (
    <section>
      <h1>Package Details</h1>
      <ul>
        <ListItem item="Breakfast, lunch & dinner" isIncluded={true} 
        />
        <ListItem item="Accommodation in 3 star hotels" isIncluded={true} />
        <ListItem item="Flight Ticket" isIncluded={false} />
      </ul>
    </section>
  );
};


function handlingClick (item){
    alert ("on click triggerd "+item)
}