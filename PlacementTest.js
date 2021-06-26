function check() {
  var c=0;
  var q1=document.placementtest.Q1.value;
  var q2=document.placementtest.Q2.value;
  var q3=document.placementtest.Q3.value;
  var q4=document.placementtest.Q4.value;
  var q5=document.placementtest.Q5.value;
  if (q1=="aus") {c++}
  if (q2=="Der Zug fährt um 10.00 Uhr ab.") {c++}
   if (q3=="gearbeitet") {c++}
    if (q4=="...einen Kaffee trinken?") {c++}
     if (q5=="mir") {c++}
  document.write(c);

  
}
