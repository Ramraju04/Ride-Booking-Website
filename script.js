// Simple form feedback and alert (simulate booking)
document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const city = document.getElementById("city").value;
  const pickup = document.getElementById("pickup").value.trim();
  const drop = document.getElementById("drop").value.trim();
  if (!city || !pickup || !drop) {
    alert("Please fill all booking fields!");
    return;
  }
  alert(`Ride booked from ${pickup} to ${drop} in ${city} via Ridex!`);
  document.getElementById("bookingForm").reset();
});
