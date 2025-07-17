const PaymentMethod = () => {
  return (
    <div
      className="payment-method-container"
      style={{
        maxWidth: 500,
        margin: "40px auto",
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        padding: 32,
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>
        Manage Payment Methods
      </h2>
      <div style={{ marginBottom: 24 }}>
        <h4>Saved Cards</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#f7f7f7",
              padding: 16,
              borderRadius: 8,
            }}
          >
            <div>
              <span
                role="img"
                aria-label="Visa"
                style={{ fontSize: 24, marginRight: 12 }}
              >
                💳
              </span>
              <span>Visa ending in 1234</span>
            </div>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#e74c3c",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#f7f7f7",
              padding: 16,
              borderRadius: 8,
            }}
          >
            <div>
              <span
                role="img"
                aria-label="Mastercard"
                style={{ fontSize: 24, marginRight: 12 }}
              >
                💳
              </span>
              <span>Mastercard ending in 5678</span>
            </div>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#e74c3c",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <hr style={{ margin: "32px 0" }} />
      <div>
        <h4>Add New Card</h4>
        <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <input
            type="text"
            placeholder="Cardholder Name"
            style={{ padding: 10, borderRadius: 6, border: "1px solid #ddd" }}
          />
          <input
            type="text"
            placeholder="Card Number"
            style={{ padding: 10, borderRadius: 6, border: "1px solid #ddd" }}
          />
          <div style={{ display: "flex", gap: 12 }}>
            <input
              type="text"
              placeholder="MM/YY"
              style={{
                flex: 1,
                padding: 10,
                borderRadius: 6,
                border: "1px solid #ddd",
              }}
            />
            <input
              type="text"
              placeholder="CVV"
              style={{
                flex: 1,
                padding: 10,
                borderRadius: 6,
                border: "1px solid #ddd",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              background: "#007bff",
              color: "#fff",
              padding: "12px 0",
              border: "none",
              borderRadius: 6,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Add Card
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentMethod;
