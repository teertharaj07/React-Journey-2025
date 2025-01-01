****12: Looping in JSX: Netflix Series Card Creation 🔥React Tutorial in Hindi****


Looping in JSX
* We don't have for loops in JSX, so we have to use .map() method of arrays.
* return (
<ul>
{students.map((student) => (
<li key={student}>{student}</li>
)}
</ul>
)i
* React.js will complain if you don't pass key prop to <li>
«+ React.js uses keys to differentiate each elements, so that it can remove
element when a students gets added or removed. Don't worry we will i
further details later.
+ We can use arrays in JSX too. So, here students.map returns array of JS.
~~ renderedonthepage. ~~ WEBEHBH

example:-  const NetflixSeries = () => {

      return (
        <div>
          <ul>
          {
            seriesData.map((curelem)=>{
                return(
                <li key={curelem.id}>
              <div>
              <img width="50%" height="50%" src={curelem.img_url} alt={curelem.name} />
              <h2>Name:{curelem.name}</h2>
              <h3>Rating:{curelem.rating}</h3>
              <p>
                summary:{curelem.description}
              </p>
              <p>Genre:{curelem.genre}</p>
              <p>Cast:{curelem.cast}</p>
             <a href={curelem.watch_url} target="_blank">
             <button>watch now</button>
             </a>
            </div>
              </li>
              );
        })
    }
  </ul>
</div>
);
}

=============sumary==== jab koi card bar bar use ho rha h our aalag-alag data ke sath to is repetion ko rokane keliye hum loop ka upyog karte h lekin react me kevel map loop ka hi upyoog hota h
jaise yadi apne ko kisi json file se data lana h to us samay hum components me data ko pass karne ke liye loop ka upyoug karte h
*jaise kisi ul ke aandar bar-bar li ka upyoug ho rha h to hum us li ka  stucture map loop me pass kar denge our yeh sab kam parent element (ul) ander hoga lekin jab bar-bar li ka upyoug multiple card banene me karte h to un li ko diffieciat karna hota is hum li ke opening tage me key=" unique id" pass karte h .