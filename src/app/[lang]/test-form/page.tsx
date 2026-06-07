export default function TestForm() {
  return (
    <div style={{ padding: "100px", background: "#0A0A0A", minHeight: "100vh", color: "#F8F5EE" }}>
      <h1 style={{ marginBottom: "20px" }}>FormSubmit Activation Page</h1>
      <p style={{ marginBottom: "40px" }}>Clicking the button below will submit a test directly to FormSubmit to trigger the activation email to defy@theunscripted.xyz.</p>
      
      <form action="https://formsubmit.co/defy@theunscripted.xyz" method="POST">
        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="name" value="Activation Test" readOnly style={{ display: "none" }} />
        <input type="email" name="email" value="test@example.com" readOnly style={{ display: "none" }} />
        <button 
          type="submit" 
          style={{ background: "#F2B705", color: "#0A0A0A", padding: "15px 30px", fontWeight: "bold", border: "none", cursor: "pointer" }}
        >
          Send Activation Request to FormSubmit
        </button>
      </form>
    </div>
  );
}
