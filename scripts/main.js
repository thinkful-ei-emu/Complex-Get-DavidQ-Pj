/* eslint-disable no-console */
/* eslint-env jquery */
'use strict';
const apiKey = 'Usf2QzTZG4256Xe9d7R7s5ni1G1Rb2MK6FysrlGb';

let states = {
  'AL': 'Alabama',
  'AK': 'Alaska',
  'AZ': 'Arizona',
  'AR': 'Arkansas',
  'CA': 'California',
  'CO': 'Colorado',
  'CT': 'Connecticut',
  'DE': 'Delaware',
  'FL': 'Florida',
  'GA': 'Georgia',
  'HI': 'Hawaii',
  'ID': 'Idaho',
  'IL': 'Illinois',
  'IN': 'Indiana',
  'IA': 'Iowa',
  'KS': 'Kansas',
  'KY': 'Kentucky',
  'LA': 'Louisiana',
  'ME': 'Maine',
  'MD': 'Maryland',
  'MA': 'Massachusetts',
  'MI': 'Michigan',
  'MN': 'Minnesota',
  'MS': 'Mississippi',
  'MO': 'Missouri',
  'MT': 'Montana',
  'NE': 'Nebraska',
  'NV': 'Nevada',
  'NH': 'New Hampshire',
  'NJ': 'New Jersey',
  'NM': 'New Mexico',
  'NY': 'New York',
  'NC': 'North Carolina',
  'ND': 'North Dakota',
  'OH': 'Ohio',
  'OK': 'Oklahoma',
  'OR': 'Oregon',
  'PA': 'Pennsylvania',
  'PR': 'Puerto Rico',
  'RI': 'Rhode Island',
  'SC': 'South Carolina',
  'SD': 'South Dakota',
  'TN': 'Tennessee',
  'TX': 'Texas',
  'UT': 'Utah',
  'VT': 'Vermont',
  'VA': 'Virginia',
  'WA': 'Washington',
  'WV': 'West Virginia',
  'WI': 'Wisconsin',
  'WY': 'Wyoming'
};

let stateMapped = Object.entries(states).map(state => `<option class="js-option" value="${state[0]}">${state[1]}</option>`);

$('select').html(stateMapped);

$('.js-form').submit(event => {
  event.preventDefault();
  let stateSelection = $('select').val();
  let maxResults = $('#js-number-input').val();
  fetchWebRequest(stateSelection,maxResults);
  // console.log(stateSelection + ' ' + maxResults);
});

function fetchWebRequest(state,num){
  let url = 'https://developer.nps.gov/api/v1/parks?stateCode=';
  url += strInput(state,num);
  fetch(url).then(result => {
    if(result.ok !== true){
      alert('Invalid state');
    } else {
      return result.json();
    } 
  })
    .then(results => takeInResults(results));
}

function strInput(state, num){
//we want to create a string that takes in our input and adds it to the end of our url in order to create the search result.
  let result = '';
  result += state.join(',').toLowerCase() + '&' + 'limit=' + num + '&api_Key=' + apiKey;
  return result;
}

function takeInResults(data){
  //should take in content recieved from server
  let result = [{}];
  return result;
}

