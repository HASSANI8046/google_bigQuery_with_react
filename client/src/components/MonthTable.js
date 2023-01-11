import React, { Component } from 'react';
import { Button } from '@material-ui/core';
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
  width: 100%;
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
    border: '1px solid #cccccc',
  },

  tableHeader: {
    fontSize: "12px",
    backgroundColor: "#f3f3f3",
    color: "#cccccc",
    borderBottom: '1px solid #cccccc',
    borderRight: '1px solid #cccccc',
  },

  tableRow: {
    fontSize: "12px",
    textAlign: "center",
    borderColor: 'inherit',
  },

  tableCell: {
    borderBottom: '1px solid #cccccc',
    borderRight: '1px solid #cccccc',
    fontSize: "12px",
    fontFamily: "sans-serif",
    textAlign: "right",
    background: "#f3f3f3",
    color: "#ff9900",
    padding: "0.3rem",
  },

  tableCell1: {
    borderRight: '5px solid White',
    borderBottom: '1px solid #cccccc',
    fontSize: "12px",
    fontFamily: "sans-serif",
    textAlign: "right",
    background: "#f3f3f3",
    color: "#ff9900",
    padding: "0.3rem",
  },

  tableHeader1: {
    fontSize: 10,
    backgroundColor: "#f3f3f3",
    color: "#cccccc",
    borderBottom: '1px solid #cccccc',
    borderRight: '5px solid White',
  },

  tableGreen: {
    borderRight: '1px solid #cccccc',
    borderBottom: '1px solid #cccccc',
    fontSize: "12px",
    fontFamily: "sans-serif",
    textAlign: "right",
    background: "#d9ead3",
    color: "#ff9900",
    padding: "0.3rem",
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

  tableGreen1: {
    borderRight: '5px solid white',
    borderBottom: '1px solid #cccccc',
    fontSize: "12px",
    fontFamily: "sans-serif",
    textAlign: "right",
    background: "#d9ead3",
    color: "#ff9900",
    padding: "0.3rem",
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
    fontSize: '12px',
    backgroundColor: "#f3f3f3",
    color: "#000000",
    borderBottom: '1px solid #cccccc',
    borderRight: '1px solid #cccccc',
    padding: "0.3rem",
  },

  group2: {
    fontSize: '12px',
    backgroundColor: "#f3f3f3",
    color: "#000000",
    borderBottom: '1px solid #cccccc',
    borderRight: '5px solid white',
    padding: "0.3rem",
  },

  tablecell3: {
    borderBottom: '1px solid #cccccc',
    borderRight: '1px solid #cccccc',
    fontSize: "12px",
    fontFamily: "sans-serif",
    textAlign: "right",
    color: "white",
    background: "#ff9900",
    padding: "0.3rem",
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
      {props.showFull ? (
        <Styles> 
        <Table className={classes.root}>
          <TableHead>
            <TableRow className={classes.tableRow}>
              <TableCell className={classes.tableHeader}></TableCell>
              <TableCell className={classes.tableHeader}></TableCell>
              <TableCell className={classes.tableHeader}>Total</TableCell>
              <TableCell className={classes.tableHeader}>ecpi</TableCell>
              <TableCell className={classes.tableHeader}>New</TableCell>
              <TableCell className={classes.tableHeader}>paid</TableCell>
              <TableCell className={classes.tableHeader}>DAU</TableCell>
              <TableCell className={classes.tableHeader1}>org%</TableCell>

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
          <TableBody>
            {props.questions1.map((item) => (
              <TableRow className={classes.tableRow}>
              <TableCellDate className={classes.tablecell3}></TableCellDate>
              <TableCellDate className={classes.tablecell3}>{item.month&& item.month}</TableCellDate>
              <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(Math.round(item.spend)))}</TableCell>
              <TableCell className={classes.tableCell}>{replaceNaNWithZero(roundToDecimal(ecpi(item.spend, item.users), 2))}</TableCell>
              <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(item.users))}</TableCell>
              <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(item.paid))}</TableCell>
              <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(item.DAU))}</TableCell>
              <TableCell className={classes.tableCell1}>{replaceNaNWithZero(roundToDecimal(org_per(item.paid, item.users), 0))}</TableCell>

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
      ) : (
        <Styles>
        <Table className={classes.root}>
        <TableHead>
          <TableRow className={classes.tableRow}>
            <TableCell className={classes.tableHeader}></TableCell>
            <TableCell className={classes.tableHeader}></TableCell>
            <TableCell className={classes.tableHeader}>Total</TableCell>
            <TableCell className={classes.tableHeader}>ecpi</TableCell>
            <TableCell className={classes.tableHeader}>New</TableCell>
            <TableCell className={classes.tableHeader}>paid</TableCell>
            <TableCell className={classes.tableHeader}>DAU</TableCell>
            <TableCell className={classes.tableHeader1}>org%</TableCell>

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
          <TableBody>
            {props.questions1.slice(0, rowsToShow).map((item) => (
              <TableRow className={classes.tableRow}>
              <TableCellDate className={classes.tablecell3} ></TableCellDate>
              <TableCellDate className={classes.tablecell3}>{item.month&& item.month}</TableCellDate>
              <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(Math.round(item.spend)))}</TableCell>
              <TableCell className={classes.tableCell}>{replaceNaNWithZero(roundToDecimal(ecpi(item.spend, item.users), 2))}</TableCell>
              <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(item.users))}</TableCell>
              <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(item.paid))}</TableCell>
              <TableCell className={classes.tableCell}>{CommaSeparated(replaceNaNWithZero(item.DAU))}</TableCell>
              <TableCell className={classes.tableCell1}>{replaceNaNWithZero(roundToDecimal(org_per(item.paid, item.users), 0))}</TableCell>

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
      )}        


    </div>
  );

}

export default QuestionsTable;

