import React, { Component } from 'react';
import deluxe from './deluxe.jpg';
import khaleej from './khaleej-suite-room.jpg';
import loc from './loc1.png';
import Untitled from './Untitled-1.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       
         <div>
	
	<form>
	
	<fieldset id="field">
	<legend> Customer information</legend>
	<table border="0" width="100%" height="200" align ="center"> 
	<tr>
	<td> Customer Name  :  </td>
	<td><input type="text" id="txtname" ></input></td>
	</tr>
  
	<tr>
	<td> Check in date  :  </td>
	<td><input type="date" id="txtdate" ></input></td>
	</tr>
	
	<tr>
	<td> Total No of days  :  </td>
	<td><input type="number" id="txtdays" ></input></td>
	</tr>
	
	<tr>
	<td> Total No of Person :  </td>
	<td><input type="number" id="txtperson" ></input></td>
	</tr>
	
	</table>
	</fieldset>
	
	<fieldset id="field">
	<legend> Choose Room Type</legend>
	<table border="0" width="100%" height="200" align ="center" cellspacing="20"> 
	<tr>
	<td> <img src={deluxe} alt="deluxe room"></img>  </td>
	<td><img src={khaleej} alt="suit room"></img></td>
	</tr>
	<tr>
	<td> <input type="radio" id="optsuit" name="room" value="Suit room"></input> Suit Room (&#8377; 4000 /-)  </td>
	<td><input type="radio" id="optdelux" name="room" value="Delux Room"></input> Delux Room (&#x20B9; 2000 /-)</td>
	</tr>
	</table>
	</fieldset>
	
	<fieldset id="field">
	<legend> Choose Aminities</legend>
	<table border="0" width="80%" height="200" align ="center" cellspacing="0"> 
	<tr >
	<td> <img src={Untitled} alt="dAC"></img>  </td>
	<td><img src={loc} alt="locker"></img></td>
	</tr>
	<tr>
	<td> <input type="checkbox" id="optac"  value="AC"></input> AC (&#8377; 200 /-)  </td>
	<td><input type="checkbox" id="optlocker" value="Locker"></input> Locker(&#8377; 100 /-)</td>
	</tr>
	</table>
	</fieldset>
	<fieldset id="field">
	<legend> Pay Advance</legend>
	<table border="0" width="50%" height="50" align ="center" cellspacing="20">
	<tr>
	<td>Pay Advance</td>
	<td ><input type="text" id="txtadv"></input></td>
	</tr>
	<tr>
	<td colspan="2" align="center"><input type ="button" value="Book" onclick="BookClick()"></input></td>	
	</tr>
	
	</table>
	</fieldset>

	</form>
	</div>
  <table border="0" width="80%" height="200" align ="center" cellspacing="0"> 
	<tr><td>
	<fieldset width="100%">
	<legend>Summary</legend>
	<table>
	<tr>
	<td colspan="2"> <span id="summary"></span></td>
	</tr>
	</table>
	</fieldset>
	</td>
	</tr>
	
	<tr><td>
	<fieldset width="100%">
	<legend>Other Links</legend>
	<table>
	<tr>
	<td colspan="2"> <span><a href="ShoppingCart.html">Shoppingcart.com</a></span></td>
	</tr>
	</table>
	</fieldset>
	</td>
	</tr>
	</table>
	</div>
      
    );
  }
}

export default App;
