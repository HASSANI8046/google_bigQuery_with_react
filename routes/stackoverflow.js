var express = require('express');
var router = express.Router();
require('dotenv').config();
const BigQuery = require('@google-cloud/bigquery');

/* GET users listing. */
router.get('/:query_id/:game_id', function (req, res, next) {
  queryStackOverflow('jupiter-2248', req.params.query_id,req.params.game_id)
    .then((result) => res.send(result))
});


function queryStackOverflow(projectId, query_id, game_id) {

  // Creates a client
  const bigquery = new BigQuery({
    projectId: projectId,
  });

  var sqlQuery
  if (query_id === 'A') {
    sqlQuery = `SELECT * FROM \`jupiter-2248.games_dashboard.A\` where game=@game`;
  }
  if (query_id.endsWith('AMA')) {
    sqlQuery = `SELECT * FROM \`jupiter-2248.games_dashboard.MA\` where game=@game`;
  }
  if (query_id.endsWith('IMA')) {
    sqlQuery = `SELECT * FROM \`jupiter-2248.games_dashboard.MI\` where game=@game`;
  }
  if (query_id === 'I') {
    sqlQuery = `SELECT * FROM \`jupiter-2248.games_dashboard.I\` where game=@game`;
  }
  if (query_id.endsWith(' A')) {
    sqlQuery = `SELECT * FROM \`jupiter-2248.games_dashboard.CWA\` where geo=@country and game=@game order by Install_time desc`;
  }
  if (query_id.endsWith(' I')) {
    sqlQuery = `SELECT * FROM \`jupiter-2248.games_dashboard.CWI\` where geo=@country and game=@game order by Install_time desc`;
  }
  if (query_id.endsWith(' AMA')) {
    sqlQuery = `SELECT * FROM \`jupiter-2248.games_dashboard.CWMA\` where geo=@country and game=@game`;
  }
  if (query_id.endsWith(' IMA')) {
    sqlQuery = `SELECT * FROM \`jupiter-2248.games_dashboard.CWMI\` where geo=@country and game=@game`;
  }

  const options = {
    query: sqlQuery,
    useLegacySql: false,
    params: { country: query_id.split(' ')[0], game:game_id}, // Use standard SQL syntax for queries.
  };

  // Runs the query
  return bigquery
    .query(options)
    .then(results => {
      const rows = results[0];
      return rows
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
}

module.exports = router;
