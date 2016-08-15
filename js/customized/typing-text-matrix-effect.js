// from: http://cssdeck.com/labs/chardelay


/* Initializer */
function initMatrixText() {
  var str = 'A Presentation Framework by @marcolago|||';
  str += "就这样任时间流淌|就这样任设计悠扬||||";
  str += "谢谢！";

  var arr = [1, 2, 3, 4, 5, 6, 7, 8];

  var settings = {
    obj: str,
    direction: 'h',
    delay: 0
  };
  /*
   *      VARS
   */
  /*
   * Type of element to create
   *   - String representation
   */
  // var el = 'p';
  /*
   * Set Timeout Interval
   *   - If delay is number and > 0 use it
   *   - Defaults: 1s for vert; 150ms for horz
   */
  var dly = (typeof settings.delay === 'number' && settings.delay > 0) ? settings.delay : ((settings.direction === 'v') ? 1000 : 150);
  /* If obj is a string then convert to character array */
  var newObj = [];
  /* Create element */
  var divId = 'bye', pId = 'byeP';
  var div = document.getElementById(divId);
  var elmt = document.getElementById(pId);
  /***   END VARS   ***/
  /*
   *     FUNCTIONS
   */
  /* Split string into character array */
  function splitStr(s) {
    s.split('');
    return s;
  }
  /* Write text inside element */
  function writeIt(ele, object, index, dir) {
    /* If vertical then add a <br /> */
    if (object[index] === '|') {
      ele.innerHTML += '<br />';
    } else {
      ele.innerHTML += object[index];
    }
  }
  /***   END FUNCTIONS   ***/
  /* Convert obj to character array if string */
  newObj = (Array.isArray(settings.obj)) ? settings.obj : splitStr(settings.obj);
  /* Attach class to element */
  elmt.className += 'chardelay';
  /* Attach element to document */
  div.appendChild(elmt);
  /* Loop through Array */
  for (var i = 0; i < newObj.length; i++) {
    /* Anonymous IIFE passing vars elmt, newObj, i, direction */
    (function(e, o, x, d) {
      /* Invoke delay */
      setTimeout(function() {
        /* Call write function */
        writeIt(e, o, x, d);
      }, x * dly); /* multiply to keep consistant interval on each loop*/
    })(elmt, newObj, i, settings.direction);
  }
}
/* Start */
// init();
