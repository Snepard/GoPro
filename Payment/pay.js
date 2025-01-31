// To apply the coupon code this block will be triggered
function applyCoupon() {
    const couponCode = document.getElementById('coupon').value.trim();
    const couponStatus = document.getElementById('coupon-status');
  
    if (couponCode === 'DISCOUNT10') {
      couponStatus.textContent = 'Coupon applied! You get 10% off.';
      couponStatus.classList.remove('error');
      couponStatus.classList.add('success');
    } else if (couponCode) {
      couponStatus.textContent = 'Invalid coupon code!';
      couponStatus.classList.remove('success');
      couponStatus.classList.add('error');
    } else {
      couponStatus.textContent = '';
    }
  }
//To proceed to the Payment section this function will be triggered
  function proceedToPayment() {
    event.preventDefault();
  
    // Get the selected payment method
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked');
    
    // Check if a payment method is selected or not. if not then raise alert
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }
  
    // Get the billing details into varibales
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const amount = document.getElementById('amount');
  
    // check if all the fields are entered and not left empty plus in the correct manner.
    if (!name.checkValidity()) {
      alert('Please enter your full name.');
      return;
    }
  
    if (!email.checkValidity()) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (!amount.checkValidity()) {
      alert('Please enter a valid amount.');
      return;
    }
  
    // If all validations pass, proceed to payment page
    alert("All validations passed, redirecting to payment page...");
  
const url = `payment.html?paymentMethod=${paymentMethod.value}&name=${encodeURIComponent(name.value)}&email=${encodeURIComponent(email.value)}&amount=${amount.value}`;
    
    // Redirect to the payment page
window.location.href = url;
  }
  