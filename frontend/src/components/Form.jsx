export default function Form({ onGenerate }) {
  const submit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onGenerate(formData);
  };

  return (
    <form onSubmit={submit}>
      <input name="name" placeholder="Candidate Name" required />
      <input name="role" placeholder="Job Role" required />
      <input name="company" placeholder="Company Name" required />
      <textarea name="skills" placeholder="Key Skills" />
      <input type="file" name="resume" accept="application/pdf" />
      <button>Generate</button>
    </form>
  );
}
