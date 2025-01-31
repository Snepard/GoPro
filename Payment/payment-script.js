window.onload = function() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const paymentMethod = urlParams.get('paymentMethod');
    const name = urlParams.get('name');
    const email = urlParams.get('email');
    const amount = urlParams.get('amount');
  
    const paymentDetailsContainer = document.getElementById('payment-details');
    
    // Show the billing details entered earlier by the user
    paymentDetailsContainer.innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Amount:</strong> ₹${amount}</p>
    `;
    
    // Render specific payment method form
    let paymentForm = '';
    if (paymentMethod === 'UPI') {
      paymentForm = `
        <div class="input-group">
          <label for="upi-id">Enter UPI ID</label>
          <input type="text" id="upi-id" name="upi-id" placeholder="Enter your UPI ID" required>
        </div>
        <div class="input-group">
          <label for="upi-qr">UPI QR Code</label>
          <input type="file" id="upi-qr" name="upi-qr" accept="image/*" required>
        </div>
      `;
    } else if (paymentMethod === 'Net Banking') {
      paymentForm = `
        <div class="input-group">
          <label for="bank-name">Bank Name</label>
          <input type="text" id="bank-name" name="bank-name" placeholder="Enter your bank name" required>
        </div>
        <div class="input-group">
          <label for="account-number">Account Number</label>
          <input type="number" id="account-number" name="account-number" placeholder="Enter your account number" required>
        </div>
      `;
    } else if (paymentMethod === 'Credit Card' || paymentMethod === 'Debit Card') {
      paymentForm = `
        <div class="input-group">
          <label for="card-number">Card Number</label>
          <input type="text" id="card-number" name="card-number" placeholder="Enter your card number" required>
        </div>
        <div class="input-group">
          <label for="expiry-date">Expiry Date</label>
          <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required>
        </div>
        <div class="input-group">
          <label for="cvv">CVV</label>
          <input type="number" id="cvv" name="cvv" placeholder="Enter CVV" required>
        </div>
      `;
    }
  
    // Inject the form based on payment method
    document.getElementById('payment-form').innerHTML = paymentForm;
  };
  
  // Handle the form submission
  function submitPayment() {
    alert('Payment submitted successfully!');
    // You can integrate actual payment gateway APIs here
    window.location.href = '/Main/index.html';  // Redirects to the home page (app.html)
  }
  