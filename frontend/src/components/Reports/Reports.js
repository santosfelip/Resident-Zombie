import React,{ useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

//components of style
import { makeStyles } from '@material-ui/core/styles';

//Function External
import { getReportInfected } from '../Reports/service';
import { getPeople } from '../RegisterSurvivor/service';

const useStyles = makeStyles((theme) => ({

    container: {
        marginTop:  theme.spacing(4),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        marging: 'auto',
        textAlign: 'center',
        color: 'white',
        width: '95%',
        height: '90%',
        backgroundColor: '#242526',
    },
    title:{
      textAlign: 'left',
      margin: theme.spacing(5),
    },
}))

const Reports = () => {
    const classes = useStyles();
    const history = useHistory();
    const [report, setReport] = useState([{value:''},{value:''}]);
    const [Obj, setObj] = useState([{},{},{},{}]);

    function filterPeopleWithItem(peoples) {
      return peoples.data.filter((e) => e.item.length > 0);
    }
    function reportItemCalculate(allPeopleItem){
      var Obj = [{quant:0, point:0},{quant:0, point:0},{quant:0, point:0},{quant:0, point:0}]

      for( let i = 0; i < allPeopleItem.length; i++ ){
        for( let j = 0; j < allPeopleItem[i].item.length; j++ ){
          switch(allPeopleItem[i].item[j].name) {
            case 'Fiji Water':
              Obj[0].quant += allPeopleItem[i].item[j].quant;
              Obj[0].point += allPeopleItem[i].item[j].value * allPeopleItem[i].item[j].quant;
            break;
            case 'Campbell Soup':
              Obj[1].quant += allPeopleItem[i].item[j].quant;
              Obj[1].point += allPeopleItem[i].item[j].value * allPeopleItem[i].item[j].quant;
            break;
            case 'First Aid Pouch':
              Obj[2].quant += allPeopleItem[i].item[j].quant;
              Obj[2].point += allPeopleItem[i].item[j].value * allPeopleItem[i].item[j].quant;
            break;
            case 'AK47':
              Obj[3].quant += allPeopleItem[i].item[j].quant;
              Obj[3].point += allPeopleItem[i].item[j].value * allPeopleItem[i].item[j].quant;
            break;
            default :

          }
        }
      }

      return Obj;
    }

    useEffect(() =>{
      async function loadReport() {
        const response = await getReportInfected();
        const peoples = await getPeople();

        const allPeopleItem = filterPeopleWithItem(peoples);

        const reportItemPeople = reportItemCalculate(allPeopleItem);

        setObj(reportItemPeople);
        if(!response) {
          return
        }
        setReport(response );
      }
      loadReport();
    },[])

    return(
        <div className={classes.container}>
          <h1>REPORTS</h1>

          <div className={classes.container}>
            <h2 className={classes.title}>{`Percentage of infected survivors: ${parseFloat(report[0].value).toFixed(2)}%`}</h2>
            <h2 className={classes.title}>{`Percentage of non-infected survivors: ${parseFloat(report[1].value).toFixed(2)}%`}</h2>
            <h2 className={classes.title}>{`The average amount of each kind of resource by the survivor:`}</h2>
              <h3 className={classes.title}>{`- Fiji Water: Quantity: ${Obj[0].quant}, Point: ${Obj[0].point}`}</h3>
              <h3 className={classes.title}>{`- Campbell Soup: Quantity: ${Obj[1].quant}, Point: ${Obj[1].point}`}</h3>
              <h3 className={classes.title}>{`- First Aid Pouch: Quantity: ${Obj[2].quant}, Point: ${Obj[2].point}`}</h3>
              <h3 className={classes.title}>{`- AK47: Quantity: ${Obj[3].quant}, Point: ${Obj[3].point}`}</h3>
            <h2 className={classes.title}>Points lost because of the infected survivor: {}</h2>
          </div>


          <button
              className={classes.btn}
              onClick={() => history.push('dashboard')}
          >
          Back
          </button>
        </div>
    )
}


export default Reports;
