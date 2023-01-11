import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styled from 'styled-components';



const Styles = styled.div`

padding: 1rem;
table {
  border-spacing: 0;
  border: '1px solid #cccccc';
  width: 100%;
  height: calc(100vh - 300px);
  overflow-y: scroll;
  overflow-x: scroll;
}
}`

const TableCellDate = styled(TableCell)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;




const useStyles = makeStyles({
  root: {
    width: '100%',
    borderSpacing: 0,
    border: '1px solid #cccccc',
  },

  tableCellM: {
    padding: "0.3rem",
    borderBottom: '1px solid #cccccc',
    borderRight: '1px solid #cccccc',
    fontSize: "12px",
    fontFamily: "sans-serif",
    textAlign: "right",
    background: "#ff9900",
    color:"#ffffff"
  },

  tableCellM1: {
    padding: "0.3rem",
    borderBottom: '1px solid #cccccc',
    borderRight: '1px solid #cccccc',
    fontSize: "12px",
    fontFamily: "sans-serif",
    textAlign: "right",
    background: "#f3f3f3",
    color:"#ff9900"
  },

  tableCell: {
    padding: "0.3rem",
    borderBottom: '1px solid #cccccc',
    borderRight: '1px solid #cccccc',
    fontSize: "12px",
    fontFamily: "sans-serif",
    textAlign: "right",
    background: "#f3f3f3",
  },

  tableCell1: {
    borderRight: '5px solid White',
    padding: "0.5rem",
    borderBottom: '1px solid #cccccc',
    fontSize: "12px",
    fontFamily: "sans-serif",
    textAlign: "right",
    background: "#f3f3f3",
    padding: "0.3rem",

  },

  tableGreen: {
    borderRight: '1px solid #cccccc',
    padding: "0.3rem",
    borderBottom: '1px solid #cccccc',
    fontSize: "12px",
    fontFamily: "sans-serif",
    textAlign: "right",
    background: "#d9ead3",
  },

  tableGreen1: {
    borderRight: '5px solid white',
    padding: "0.3rem",
    borderBottom: '1px solid #cccccc',
    fontSize: "12px",
    fontFamily: "sans-serif",
    textAlign: "right",
    background: "#d9ead3",

  },

  tableHeader: {
    fontSize: 10,
    backgroundColor: "#f3f3f3",
    color: "#cccccc",
    borderBottom: '1px solid #cccccc',
    borderRight: '1px solid #cccccc',
  },

  tableRow: {
    textAlign: "center",
    borderColor: 'inherit',
  },

  tableHeader1: {
    fontSize: 10,
    backgroundColor: "#f3f3f3",
    color: "#cccccc",
    borderBottom: '1px solid #cccccc',
    borderRight: '5px solid White',
  },

  headerGreen: {
    borderRight: '1px solid #cccccc',
    color: "#cccccc",
    borderBottom: '1px solid #cccccc',
    fontSize: "12px",
    fontFamily: "sans-serif",
    textAlign: "right",
    background: "#d9ead3",
  },

  headerGreen1: {
    borderRight: '5px solid white',
    color: "#cccccc",
    borderBottom: '1px solid #cccccc',
    fontSize: "12px",
    fontFamily: "sans-serif",
    textAlign: "right",
    background: "#d9ead3",
  },

  group1: {
    fontSize: 10,
    backgroundColor: "#f3f3f3",
    color: "#000000",
    borderBottom: '1px solid #cccccc',
    borderRight: '1px solid #cccccc',
    padding: "0.3rem",
  },

  group2: {
    fontSize: 10,
    backgroundColor: "#f3f3f3",
    color: "#000000",
    borderBottom: '1px solid #cccccc',
    borderRight: '5px solid white',
    padding: "0.3rem",
  },

  spacedBody: {
    borderBottom: '15px solid white',
  },

  Thead: {
    position: 'sticky',
    top: 0,
    zIndex: 10
  },


});

const QuestionsTable = (props) => {

  const classes = useStyles();

  const rowsToShow = 3;

  const ecpi = (totalSpend, totalusers) => {
    return totalSpend / totalusers;
  }
  function roundToDecimal(value, decimalPlaces) {
    return Number(Math.round(value + 'e' + decimalPlaces) + 'e-' + decimalPlaces);
  }
  const org_per = (paid_users, totalusers) => {
    return ((totalusers - paid_users) / totalusers) * 100;
  }
  const ret_per = (ret_users, totalusers) => {
    return (ret_users / totalusers) * 100;
  }

  function replaceNaNWithZero(value) {
    return isNaN(value) ? 0 : value;
  }

  function CommaSeparated(number) {
    if (typeof number === 'number') {
      return number.toLocaleString();
    }
  }

  return (
    <div>

      <Styles>
        <Table className={classes.root}>
          <TableHead className={classes.Thead}>
            <TableRow >
              <TableCell className={classes.group1}></TableCell>
              <TableCell className={classes.group1}></TableCell>
              <TableCell className={classes.group1} colSpan={2}>Spend</TableCell>
              <TableCell className={classes.group2} colSpan={4}>Users</TableCell>
              <TableCell className={classes.group2} colSpan={4}>Ret</TableCell>
              <TableCell className={classes.group2} colSpan={5}>Rev</TableCell>
              <TableCell className={classes.group2} colSpan={3}>ADS per DAU</TableCell>
              <TableCell className={classes.group2} colSpan={3}>FB</TableCell>
              <TableCell className={classes.group2} colSpan={3}>Ggl</TableCell>
              <TableCell className={classes.group2} colSpan={3}>IS</TableCell>
              <TableCell className={classes.group2} colSpan={3}>AL</TableCell>
              <TableCell className={classes.group2} colSpan={3}>UA</TableCell>
              <TableCell className={classes.group2} colSpan={3}>TJ</TableCell>
              <TableCell className={classes.group2} colSpan={3}>Xiaomi</TableCell>
              <TableCell className={classes.group2} colSpan={3}>BDG</TableCell>
              <TableCell className={classes.group2} colSpan={3}>MTG</TableCell>
              <TableCell className={classes.group2} colSpan={3}>AC</TableCell>
              <TableCell className={classes.group2} colSpan={3}>CB</TableCell>
              <TableCell className={classes.group2} colSpan={3}>SP</TableCell>
              <TableCell className={classes.group2} colSpan={3}>IS</TableCell>
              <TableCell className={classes.group2} colSpan={3}>BR</TableCell>
              <TableCell className={classes.group2} colSpan={3}>RV</TableCell>
            </TableRow>
            <TableRow className={classes.tableRow}>
              <TableCell className={classes.tableHeader}></TableCell>
              <TableCell className={classes.tableHeader}></TableCell>
              <TableCell className={classes.tableHeader}>Total</TableCell>
              <TableCell className={classes.tableHeader}>ecpi</TableCell>
              <TableCell className={classes.tableHeader}>New</TableCell>
              <TableCell className={classes.tableHeader}>paid</TableCell>
              <TableCell className={classes.tableHeader}>DAU</TableCell>
              <TableCell className={classes.tableHeader1}>org%</TableCell>

              <TableCell className={classes.tableHeader}>d1</TableCell>
              <TableCell className={classes.tableHeader}>d7</TableCell>
              <TableCell className={classes.tableHeader}>d14</TableCell>
              <TableCell className={classes.tableHeader1}>d30</TableCell>

              <TableCell className={classes.headerGreen}>AdRev</TableCell>
              <TableCell className={classes.headerGreen}>IAP</TableCell>
              <TableCell className={classes.headerGreen}>Ad</TableCell>
              <TableCell className={classes.headerGreen}>AdArpdau</TableCell>
              <TableCell className={classes.headerGreen1}>Arpdau</TableCell>

              <TableCell className={classes.tableHeader}>IS</TableCell>
              <TableCell className={classes.tableHeader}>RV</TableCell>
              <TableCell className={classes.tableHeader1}>BR</TableCell>

              <TableCell className={classes.tableHeader}>spend</TableCell>
              <TableCell className={classes.tableHeader}>users</TableCell>
              <TableCell className={classes.tableHeader1}>cpi</TableCell>

              <TableCell className={classes.tableHeader}>spend</TableCell>
              <TableCell className={classes.tableHeader}>users</TableCell>
              <TableCell className={classes.tableHeader1}>cpi</TableCell>

              <TableCell className={classes.tableHeader}>spend</TableCell>
              <TableCell className={classes.tableHeader}>users</TableCell>
              <TableCell className={classes.tableHeader1}>cpi</TableCell>

              <TableCell className={classes.tableHeader}>spend</TableCell>
              <TableCell className={classes.tableHeader}>users</TableCell>
              <TableCell className={classes.tableHeader1}>cpi</TableCell>

              <TableCell className={classes.tableHeader}>spend</TableCell>
              <TableCell className={classes.tableHeader}>users</TableCell>
              <TableCell className={classes.tableHeader1}>cpi</TableCell>

              <TableCell className={classes.tableHeader}>spend</TableCell>
              <TableCell className={classes.tableHeader}>users</TableCell>
              <TableCell className={classes.tableHeader1}>cpi</TableCell>

              <TableCell className={classes.tableHeader}>spend</TableCell>
              <TableCell className={classes.tableHeader}>users</TableCell>
              <TableCell className={classes.tableHeader1}>cpi</TableCell>

              <TableCell className={classes.tableHeader}>spend</TableCell>
              <TableCell className={classes.tableHeader}>users</TableCell>
              <TableCell className={classes.tableHeader1}>cpi</TableCell>

              <TableCell className={classes.tableHeader}>spend</TableCell>
              <TableCell className={classes.tableHeader}>users</TableCell>
              <TableCell className={classes.tableHeader1}>cpi</TableCell>

              <TableCell className={classes.tableHeader}>spend</TableCell>
              <TableCell className={classes.tableHeader}>users</TableCell>
              <TableCell className={classes.tableHeader1}>cpi</TableCell>

              <TableCell className={classes.tableHeader}>spend</TableCell>
              <TableCell className={classes.tableHeader}>users</TableCell>
              <TableCell className={classes.tableHeader1}>cpi</TableCell>

              <TableCell className={classes.tableHeader}>spend</TableCell>
              <TableCell className={classes.tableHeader}>users</TableCell>
              <TableCell className={classes.tableHeader1}>cpi</TableCell>

              <TableCell className={classes.tableHeader}>imp</TableCell>
              <TableCell className={classes.tableHeader}>Rev</TableCell>
              <TableCell className={classes.tableHeader1}>CPM</TableCell>

              <TableCell className={classes.tableHeader}>imp</TableCell>
              <TableCell className={classes.tableHeader}>Rev</TableCell>
              <TableCell className={classes.tableHeader1}>CPM</TableCell>

              <TableCell className={classes.tableHeader}>imp</TableCell>
              <TableCell className={classes.tableHeader}>Rev</TableCell>
              <TableCell className={classes.tableHeader}>CPM</TableCell>


            </TableRow>
          </TableHead>

          {props.showFull ?
                     <TableBody className={classes.spacedBody} displayRowCheckbox={false}>
                     {props.questions1 && props.questions1.slice(0, 12).map((item) => (
                       <TableRow className={classes.tableRow}>
                         <TableCell className={classes.tableCellM}></TableCell>
                         <TableCellDate className={classes.tableCellM}>{item.month && item.month}</TableCellDate>
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(Math.round(item.spend)))}</TableCell>
                         <TableCell className={classes.tableCellM1}>{replaceNaNWithZero(roundToDecimal(ecpi(item.spend, item.users), 2))}</TableCell>
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(item.users))}</TableCell>
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(item.paid))}</TableCell>
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(item.DAU))}</TableCell>
                         <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(org_per(item.paid, item.users), 0))}</TableCell>
         
                         <TableCell className={classes.tableCellM1}>{replaceNaNWithZero(roundToDecimal(ret_per(item.Retention_Day_1, item.total_users), 0))}</TableCell>
                         <TableCell className={classes.tableCellM1}>{replaceNaNWithZero(roundToDecimal(ret_per(item.Retention_Day_7, item.total_users), 0))}</TableCell>
                         <TableCell className={classes.tableCellM1}>{replaceNaNWithZero(roundToDecimal(ret_per(item.Retention_Day_14, item.total_users), 0))}</TableCell>
                         <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(ret_per(item.Retention_Day_30, item.total_users), 0))}</TableCell>
         
                         <TableCell className={classes.tableGreen} style={{color:'#ff9900'}}>{CommaSeparated(replaceNaNWithZero(Math.round(item.AdRev)))}</TableCell>
                         <TableCell className={classes.tableGreen} style={{color:'#ff9900'}}>{ }</TableCell>
                         <TableCell className={classes.tableGreen} style={{color:'#ff9900'}}>{CommaSeparated(replaceNaNWithZero(Math.round(item.AdRev)))}</TableCell>
                         <TableCell className={classes.tableGreen} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.Ad_ArpDAU, 2))}</TableCell>
                         <TableCell className={classes.tableGreen1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.Ad_ArpDAU, 2))}</TableCell>
         
                         <TableCell className={classes.tableCellM1}>{replaceNaNWithZero(roundToDecimal(item.INT_DAU, 2))}</TableCell>
                         <TableCell className={classes.tableCellM1}>{replaceNaNWithZero(roundToDecimal(item.RV_DAU, 2))}</TableCell>
                         <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.BNR_DAU, 2))}</TableCell>
         
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.Facebook_cost, 0)))}</TableCell>
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.Facebook_users, 0)))}</TableCell>
                         <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.Facebook_cpi, 2))}</TableCell>
         
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.googleadwords_cost, 0)))}</TableCell>
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.googleadwords_users, 0)))}</TableCell>
                         <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.googleadwords_cpi, 2))}</TableCell>
         
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.ironsource_cost, 0)))}</TableCell>
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.ironsource_users, 0)))}</TableCell>
                         <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.ironsource_cpi, 2))}</TableCell>
         
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.applovin_cost, 0)))}</TableCell>
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.applovin_users, 0)))}</TableCell>
                         <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.applovin_cpi, 2))}</TableCell>
         
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.tapjoy_cost, 0)))}</TableCell>
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.tapjoy_users, 0)))}</TableCell>
                         <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.tapjoy_cpi, 2))}</TableCell>
         
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.unityads_cost, 0)))}</TableCell>
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.unityads_users, 0)))}</TableCell>
                         <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.unityads_cpi, 2))}</TableCell>
         
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.xiamiglobal_cost, 0)))}</TableCell>
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.xiamiglobal_users, 0)))}</TableCell>
                         <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.xiamiglobal_cpi, 2))}</TableCell>
         
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.bytedanceglobal_cost, 0)))}</TableCell>
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.bytedanceglobal_users, 0)))}</TableCell>
                         <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.bytedanceglobal_cpi, 2))}</TableCell>
         
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.mintegral_cost, 0)))}</TableCell>
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.mintegral_users, 0)))}</TableCell>
                         <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.mintegral_cpi, 2))}</TableCell>
         
         
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.adcolony_cost, 0)))}</TableCell>
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.adcolony_users, 0)))}</TableCell>
                         <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.adcolony_cpi, 2))}</TableCell>
         
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.chartboost2s_cost, 0)))}</TableCell>
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.chartboost2s_users, 0)))}</TableCell>
                         <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.chartboost2s_cpi, 2))}</TableCell>
         
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.sponsorpay_cost, 0)))}</TableCell>
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.sponsorpay_users, 0)))}</TableCell>
                         <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.sponsorpay_cpi, 2))}</TableCell>
         
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.IS_Imp, 0)))}</TableCell>
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.IS_Rev, 0)))}</TableCell>
                         <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.IS_Cpm, 2))}</TableCell>
         
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.BR_Imp, 0)))}</TableCell>
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.BR_Rev, 0)))}</TableCell>
                         <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.BR_Cpm, 2))}</TableCell>
         
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.RV_Imp, 0)))}</TableCell>
                         <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.RV_Rev, 0)))}</TableCell>
                         <TableCell className={classes.tableCell} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.RV_Cpm, 2))}</TableCell>
         
                       </TableRow>
                     ))}
         
                   </TableBody>
            :          <TableBody className={classes.spacedBody} displayRowCheckbox={false}>
            {props.questions1 && props.questions1.slice(0, 3).map((item) => (
              <TableRow className={classes.tableRow}>
                <TableCell className={classes.tableCellM}></TableCell>
                <TableCellDate className={classes.tableCellM}>{item.month && item.month}</TableCellDate>
                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(Math.round(item.spend)))}</TableCell>
                <TableCell className={classes.tableCellM1}>{replaceNaNWithZero(roundToDecimal(ecpi(item.spend, item.users), 2))}</TableCell>
                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(item.users))}</TableCell>
                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(item.paid))}</TableCell>
                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(item.DAU))}</TableCell>
                <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(org_per(item.paid, item.users), 0))}</TableCell>

                <TableCell className={classes.tableCellM1}>{replaceNaNWithZero(roundToDecimal(ret_per(item.Retention_Day_1, item.total_users), 0))}</TableCell>
                <TableCell className={classes.tableCellM1}>{replaceNaNWithZero(roundToDecimal(ret_per(item.Retention_Day_7, item.total_users), 0))}</TableCell>
                <TableCell className={classes.tableCellM1}>{replaceNaNWithZero(roundToDecimal(ret_per(item.Retention_Day_14, item.total_users), 0))}</TableCell>
                <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(ret_per(item.Retention_Day_30, item.total_users), 0))}</TableCell>

                <TableCell className={classes.tableGreen} style={{color:'#ff9900'}}>{CommaSeparated(replaceNaNWithZero(Math.round(item.AdRev)))}</TableCell>
                <TableCell className={classes.tableGreen} style={{color:'#ff9900'}}>{ }</TableCell>
                <TableCell className={classes.tableGreen} style={{color:'#ff9900'}}>{CommaSeparated(replaceNaNWithZero(Math.round(item.AdRev)))}</TableCell>
                <TableCell className={classes.tableGreen} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.Ad_ArpDAU, 2))}</TableCell>
                <TableCell className={classes.tableGreen1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.Ad_ArpDAU, 2))}</TableCell>

                <TableCell className={classes.tableCellM1}>{replaceNaNWithZero(roundToDecimal(item.INT_DAU, 2))}</TableCell>
                <TableCell className={classes.tableCellM1}>{replaceNaNWithZero(roundToDecimal(item.RV_DAU, 2))}</TableCell>
                <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.BNR_DAU, 2))}</TableCell>

                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.Facebook_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.Facebook_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.Facebook_cpi, 2))}</TableCell>

                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.googleadwords_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.googleadwords_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.googleadwords_cpi, 2))}</TableCell>

                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.ironsource_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.ironsource_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.ironsource_cpi, 2))}</TableCell>

                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.applovin_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.applovin_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.applovin_cpi, 2))}</TableCell>

                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.tapjoy_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.tapjoy_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.tapjoy_cpi, 2))}</TableCell>

                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.unityads_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.unityads_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.unityads_cpi, 2))}</TableCell>

                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.xiamiglobal_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.xiamiglobal_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.xiamiglobal_cpi, 2))}</TableCell>

                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.bytedanceglobal_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.bytedanceglobal_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.bytedanceglobal_cpi, 2))}</TableCell>

                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.mintegral_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.mintegral_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.mintegral_cpi, 2))}</TableCell>


                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.adcolony_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.adcolony_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.adcolony_cpi, 2))}</TableCell>

                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.chartboost2s_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.chartboost2s_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.chartboost2s_cpi, 2))}</TableCell>

                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.sponsorpay_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.sponsorpay_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.sponsorpay_cpi, 2))}</TableCell>

                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.IS_Imp, 0)))}</TableCell>
                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.IS_Rev, 0)))}</TableCell>
                <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.IS_Cpm, 2))}</TableCell>

                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.BR_Imp, 0)))}</TableCell>
                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.BR_Rev, 0)))}</TableCell>
                <TableCell className={classes.tableCell1} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.BR_Cpm, 2))}</TableCell>

                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.RV_Imp, 0)))}</TableCell>
                <TableCell className={classes.tableCellM1}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.RV_Rev, 0)))}</TableCell>
                <TableCell className={classes.tableCell} style={{color:'#ff9900'}}>{replaceNaNWithZero(roundToDecimal(item.RV_Cpm, 2))}</TableCell>

              </TableRow>
            ))}

          </TableBody>
          }

 
          <TableBody className={classes.spacedBody} displayRowCheckbox={false}>
            {props.questions && props.questions.slice(0, 60).map((item) => (
              <TableRow className={classes.tableRow}>

                <TableCell className={classes.tableCell}>{item.geo}</TableCell>
                <TableCellDate className={classes.tableCell}>{item.Install_time && item.Install_time.value}</TableCellDate>
                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(Math.round(item.total_spend)))}</TableCell>
                <TableCell className={classes.tableCell}>{replaceNaNWithZero(roundToDecimal(ecpi(item.total_spend, item.total_users), 2))}</TableCell>
                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(item.total_users))}</TableCell>
                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(item.paid_users))}</TableCell>
                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(item.DAU))}</TableCell>
                <TableCell className={classes.tableCell1}>{replaceNaNWithZero(roundToDecimal(org_per(item.paid_users, item.total_users), 0))}</TableCell>

                <TableCell className={classes.tableCell}>{replaceNaNWithZero(roundToDecimal(ret_per(item.Retention_Day_1, item.total_users), 0))}</TableCell>
                <TableCell className={classes.tableCell}>{replaceNaNWithZero(roundToDecimal(ret_per(item.Retention_Day_7, item.total_users), 0))}</TableCell>
                <TableCell className={classes.tableCell}>{replaceNaNWithZero(roundToDecimal(ret_per(item.Retention_Day_14, item.total_users), 0))}</TableCell>
                <TableCell className={classes.tableCell1}>{replaceNaNWithZero(roundToDecimal(ret_per(item.Retention_Day_30, item.total_users), 0))}</TableCell>

                <TableCell className={classes.tableGreen}>{CommaSeparated(replaceNaNWithZero(Math.round(item.AdRev)))}</TableCell>
                <TableCell className={classes.tableGreen}>{ }</TableCell>
                <TableCell className={classes.tableGreen}>{CommaSeparated(replaceNaNWithZero(Math.round(item.AdRev)))}</TableCell>
                <TableCell className={classes.tableGreen}>{replaceNaNWithZero(roundToDecimal(item.Ad_ArpDAU, 2))}</TableCell>
                <TableCell className={classes.tableGreen1}>{replaceNaNWithZero(roundToDecimal(item.Ad_ArpDAU, 2))}</TableCell>

                <TableCell className={classes.tableCell}>{replaceNaNWithZero(roundToDecimal(item.INT_DAU, 2))}</TableCell>
                <TableCell className={classes.tableCell}>{replaceNaNWithZero(roundToDecimal(item.RV_DAU, 2))}</TableCell>
                <TableCell className={classes.tableCell1}>{replaceNaNWithZero(roundToDecimal(item.BNR_DAU, 2))}</TableCell>

                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.Facebook_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.Facebook_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1}>{replaceNaNWithZero(roundToDecimal(item.Facebook_cpi, 2))}</TableCell>

                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.googleadwords_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.googleadwords_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1}>{replaceNaNWithZero(roundToDecimal(item.googleadwords_cpi, 2))}</TableCell>

                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.ironsource_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.ironsource_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1}>{replaceNaNWithZero(roundToDecimal(item.ironsource_cpi, 2))}</TableCell>

                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.applovin_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.applovin_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1}>{replaceNaNWithZero(roundToDecimal(item.applovin_cpi, 2))}</TableCell>

                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.tapjoy_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.tapjoy_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1}>{replaceNaNWithZero(roundToDecimal(item.tapjoy_cpi, 2))}</TableCell>

                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.unityads_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.unityads_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1}>{replaceNaNWithZero(roundToDecimal(item.unityads_cpi, 2))}</TableCell>

                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.xiamiglobal_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.xiamiglobal_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1}>{replaceNaNWithZero(roundToDecimal(item.xiamiglobal_cpi, 2))}</TableCell>

                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.bytedanceglobal_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.bytedanceglobal_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1}>{replaceNaNWithZero(roundToDecimal(item.bytedanceglobal_cpi, 2))}</TableCell>

                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.mintegral_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.mintegral_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1}>{replaceNaNWithZero(roundToDecimal(item.mintegral_cpi, 2))}</TableCell>


                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.adcolony_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.adcolony_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1}>{replaceNaNWithZero(roundToDecimal(item.adcolony_cpi, 2))}</TableCell>

                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.chartboost2s_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.chartboost2s_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1}>{replaceNaNWithZero(roundToDecimal(item.chartboost2s_cpi, 2))}</TableCell>

                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.sponsorpay_cost, 0)))}</TableCell>
                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.sponsorpay_users, 0)))}</TableCell>
                <TableCell className={classes.tableCell1}>{replaceNaNWithZero(roundToDecimal(item.sponsorpay_cpi, 2))}</TableCell>

                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.IS_Imp, 0)))}</TableCell>
                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.IS_Rev, 0)))}</TableCell>
                <TableCell className={classes.tableCell1}>{replaceNaNWithZero(roundToDecimal(item.IS_Cpm, 2))}</TableCell>

                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.BR_Imp, 0)))}</TableCell>
                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.BR_Rev, 0)))}</TableCell>
                <TableCell className={classes.tableCell1}>{replaceNaNWithZero(roundToDecimal(item.BR_Cpm, 2))}</TableCell>

                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.RV_Imp, 0)))}</TableCell>
                <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(roundToDecimal(item.RV_Rev, 0)))}</TableCell>
                <TableCell className={classes.tableCell}>{replaceNaNWithZero(roundToDecimal(item.RV_Cpm, 2))}</TableCell>

              </TableRow>
            ))}

          </TableBody>
        </Table>
      </Styles>
    </div>
  );
}

export default QuestionsTable;
