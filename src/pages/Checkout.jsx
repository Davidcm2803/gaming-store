import { useState } from 'react'

export default function Checkout({ cart, cartTotal, navigate }) {
  const [step, setStep] = useState(1) // 1: shipping, 2: payment, 3: confirm
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', state: '', zip: '', country: 'United States',
    cardNumber: '', cardName: '', expiry: '', cvv: '',
    saveInfo: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }))

  const shipping = 0
  const tax = cartTotal * 0.08
  const total = cartTotal + shipping + tax

  const handleSubmit = () => {
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md space-y-6 animate-fadeIn">
          <div className="w-24 h-24 rounded-full bg-neonGreen/10 border-2 border-neonGreen flex items-center justify-center mx-auto">
            <svg className="w-12 h-12 text-neonGreen" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <div>
            <h2 className="font-display font-bold text-4xl mb-2">Order Placed!</h2>
            <p className="text-textSecondary">Thank you for your purchase. Your gaming gear is on its way!</p>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-6 text-left space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted">Order Number</span>
              <span className="font-mono-game text-neon">#NXP-{Math.floor(Math.random() * 90000 + 10000)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted">Estimated Delivery</span>
              <span className="font-mono-game text-textPrimary">2-3 Business Days</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted">Total Charged</span>
              <span className="font-display font-bold text-neon">${total.toFixed(2)}</span>
            </div>
          </div>
          <button onClick={() => navigate('home')} className="btn-neon w-full">
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  const InputField = ({ label, field, type = 'text', placeholder, half = false }) => (
    <div className={half ? 'col-span-1' : 'col-span-2'}>
      <label className="block font-display font-semibold text-xs tracking-widest text-textSecondary mb-2 uppercase">
        {label}
      </label>
      <input
        type={type}
        value={form[field]}
        onChange={(e) => update(field, e.target.value)}
        placeholder={placeholder}
        className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-textPrimary placeholder-muted text-sm focus:outline-none focus:border-neon transition-colors font-body"
      />
    </div>
  )

  const steps = [
    { n: 1, label: 'Shipping' },
    { n: 2, label: 'Payment' },
    { n: 3, label: 'Review' },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <p className="font-mono-game text-xs text-neon tracking-widest mb-2">// SECURE CHECKOUT</p>
        <h1 className="font-display font-bold text-4xl">Checkout</h1>
      </div>

      {/* Steps */}
      <div className="flex items-center gap-0 mb-10">
        {steps.map((s, i) => (
          <div key={s.n} className="flex items-center">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm transition-all ${
                step >= s.n
                  ? 'bg-neon text-bg'
                  : 'bg-surface border border-border text-muted'
              }`}>
                {step > s.n ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                ) : s.n}
              </div>
              <span className={`font-display font-semibold text-sm hidden sm:block ${step >= s.n ? 'text-textPrimary' : 'text-muted'}`}>
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`h-px w-12 sm:w-20 mx-2 sm:mx-4 transition-all ${step > s.n ? 'bg-neon' : 'bg-border'}`} />
            )}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Form */}
        <div className="lg:col-span-2">
          {/* Step 1: Shipping */}
          {step === 1 && (
            <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="font-display font-bold text-xl">Shipping Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <InputField label="First Name" field="firstName" placeholder="John" half />
                <InputField label="Last Name" field="lastName" placeholder="Doe" half />
                <InputField label="Email Address" field="email" type="email" placeholder="john@example.com" />
                <InputField label="Phone Number" field="phone" type="tel" placeholder="+1 (555) 000-0000" />
                <InputField label="Street Address" field="address" placeholder="123 Gaming St" />
                <InputField label="City" field="city" placeholder="Los Angeles" half />
                <InputField label="State / Province" field="state" placeholder="CA" half />
                <InputField label="ZIP / Postal Code" field="zip" placeholder="90001" half />
                <InputField label="Country" field="country" placeholder="United States" half />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <div
                  onClick={() => update('saveInfo', !form.saveInfo)}
                  className={`w-5 h-5 rounded border cursor-pointer flex items-center justify-center transition-all ${form.saveInfo ? 'bg-neon border-neon' : 'border-border hover:border-neon'}`}
                >
                  {form.saveInfo && (
                    <svg className="w-3 h-3 text-bg" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  )}
                </div>
                <label className="text-textSecondary text-sm cursor-pointer" onClick={() => update('saveInfo', !form.saveInfo)}>
                  Save shipping info for next time
                </label>
              </div>

              <button onClick={() => setStep(2)} className="btn-neon w-full flex items-center justify-center gap-2">
                Continue to Payment
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="font-display font-bold text-xl">Payment Details</h2>

              {/* Payment method tabs */}
              <div className="flex gap-3">
                {['Credit Card', 'PayPal', 'Apple Pay'].map((method, i) => (
                  <button
                    key={method}
                    className={`px-4 py-2 rounded-lg font-display font-semibold text-sm transition-all ${
                      i === 0
                        ? 'bg-neon/10 border border-neon text-neon'
                        : 'bg-surface border border-border text-muted hover:border-neon/50'
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block font-display font-semibold text-xs tracking-widest text-textSecondary mb-2 uppercase">
                    Card Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={form.cardNumber}
                      onChange={(e) => update('cardNumber', e.target.value)}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-textPrimary placeholder-muted text-sm focus:outline-none focus:border-neon transition-colors pr-20 font-body"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                      <span className="font-mono-game text-xs text-muted border border-border px-1.5 py-0.5 rounded">VISA</span>
                      <span className="font-mono-game text-xs text-muted border border-border px-1.5 py-0.5 rounded">MC</span>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="block font-display font-semibold text-xs tracking-widest text-textSecondary mb-2 uppercase">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    value={form.cardName}
                    onChange={(e) => update('cardName', e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-textPrimary placeholder-muted text-sm focus:outline-none focus:border-neon transition-colors font-body"
                  />
                </div>
                <div>
                  <label className="block font-display font-semibold text-xs tracking-widest text-textSecondary mb-2 uppercase">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    value={form.expiry}
                    onChange={(e) => update('expiry', e.target.value)}
                    placeholder="MM / YY"
                    maxLength={7}
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-textPrimary placeholder-muted text-sm focus:outline-none focus:border-neon transition-colors font-body"
                  />
                </div>
                <div>
                  <label className="block font-display font-semibold text-xs tracking-widest text-textSecondary mb-2 uppercase">
                    CVV
                  </label>
                  <input
                    type="password"
                    value={form.cvv}
                    onChange={(e) => update('cvv', e.target.value)}
                    placeholder="•••"
                    maxLength={4}
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-textPrimary placeholder-muted text-sm focus:outline-none focus:border-neon transition-colors font-body"
                  />
                </div>
              </div>

              {/* SSL note */}
              <div className="flex items-center gap-2 bg-neon/5 border border-neon/20 rounded-xl px-4 py-3">
                <svg className="w-4 h-4 text-neon flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <p className="text-textSecondary text-xs">Your payment info is encrypted with 256-bit SSL security.</p>
              </div>

              <div className="flex gap-3">
                <button onClick={() => setStep(1)} className="flex-1 border border-border text-textSecondary hover:border-neon/50 hover:text-textPrimary font-display font-semibold py-3 rounded-xl transition-all">
                  Back
                </button>
                <button onClick={() => setStep(3)} className="flex-1 btn-neon flex items-center justify-center gap-2">
                  Review Order
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="font-display font-bold text-xl">Review Your Order</h2>

              {/* Shipping summary */}
              <div className="bg-card border border-border rounded-xl p-4 space-y-1">
                <p className="font-display font-bold text-sm tracking-wider text-textSecondary mb-3">SHIPPING TO</p>
                <p className="text-textPrimary">{form.firstName} {form.lastName}</p>
                <p className="text-textSecondary text-sm">{form.address}</p>
                <p className="text-textSecondary text-sm">{form.city}, {form.state} {form.zip}</p>
                <p className="text-textSecondary text-sm">{form.email}</p>
              </div>

              {/* Payment summary */}
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="font-display font-bold text-sm tracking-wider text-textSecondary mb-3">PAYMENT</p>
                <p className="text-textPrimary font-mono-game">•••• •••• •••• {form.cardNumber.slice(-4) || '0000'}</p>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 bg-card border border-border rounded-xl p-3">
                    <img src={item.image} alt={item.name} className="w-14 h-14 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-semibold text-sm truncate">{item.name}</p>
                      <p className="text-muted text-xs font-mono-game">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-display font-bold text-neon">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button onClick={() => setStep(2)} className="flex-1 border border-border text-textSecondary hover:border-neon/50 hover:text-textPrimary font-display font-semibold py-3 rounded-xl transition-all">
                  Back
                </button>
                <button onClick={handleSubmit} className="flex-1 btn-neon flex items-center justify-center gap-2 text-base">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  Place Order
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary Sidebar */}
        <div>
          <div className="sticky top-24 bg-surface border border-border rounded-2xl p-6 space-y-5">
            <h3 className="font-display font-bold text-lg">Order Summary</h3>

            {/* Items */}
            <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
              {cart.length === 0 ? (
                <p className="text-muted text-sm">Your cart is empty</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden border border-border">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-neon text-bg text-xs font-bold rounded-full flex items-center justify-center font-mono-game">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-textPrimary truncate font-display font-semibold">{item.name}</p>
                    </div>
                    <span className="text-sm font-mono-game text-textSecondary">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))
              )}
            </div>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Totals */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-textSecondary">
                <span>Subtotal</span>
                <span className="font-mono-game">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-textSecondary">
                <span>Shipping</span>
                <span className="text-neonGreen font-mono-game text-xs">FREE</span>
              </div>
              <div className="flex justify-between text-sm text-textSecondary">
                <span>Tax (8%)</span>
                <span className="font-mono-game">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-display font-bold text-xl pt-3 border-t border-border">
                <span>Total</span>
                <span className="text-neon">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Promo code */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Promo code"
                className="flex-1 bg-card border border-border rounded-lg px-3 py-2 text-sm text-textPrimary placeholder-muted focus:outline-none focus:border-neon transition-colors font-body"
              />
              <button className="border border-neon/50 text-neon hover:border-neon hover:bg-neon/10 font-display font-semibold text-sm px-3 py-2 rounded-lg transition-all">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
