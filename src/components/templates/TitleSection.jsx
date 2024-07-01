export default function TitleSection(props){
  return (
    <section class="text-center container">
      <div class="p-2 mb-2 bg-body-secondary text-end">{props.date}</div>
      <h2 class="fw-light">{props.title}</h2>
      <p class="lead text-body-secondary">{props.text}</p>
    </section>
  );
}