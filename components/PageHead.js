import Breadcrumbs from './Breadcrumbs';

export default function PageHead({ breadcrumbs, title, subtitle }) {
  return (
    <section className="page-head">
      <div className="container">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="page-title">{title}</h1>
        {subtitle ? <p className="page-sub">{subtitle}</p> : null}
      </div>
    </section>
  );
}
