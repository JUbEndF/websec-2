
async function get_stops()
{
    let url = "https://tosamara.ru/api/v2/classifiers/stopsFullDB.xml";
    let res = await fetch(url)
    .then( response => response.text() )
    .then( str => {
        let parser = new window.DOMParser();
        return parser.parseFromString(str, "text/xml");
    } );
    return res;
}

async function buttonSearchClickHandler(){
    const x = await get_stops();
    let elem = document.getElementById('a');
    let search_stop = document.getElementById('lastbusquery');
    if(search_stop != '')
    {
        let stopData = x.getElementsByTagName('titel');

        let i = 0;
        for(i; i < stopData.length; i++)
        {
            if (stopData[i].textContent == searchText) {
                found = aTags[i];
                break;
            }
        }

        elem.innerText = "автобусы Коммерческие: " + "\n" + "автобусы Муниципальные" + "\n"  + "автобусы Сезон" +
         '\n'  + "автобусы Специальные" + '\n'  + "автобусы Интерсити" + '\n'  + "автобусы Пригород";
    }
}
