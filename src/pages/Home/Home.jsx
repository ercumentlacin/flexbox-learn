import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.homePage}>
      <section className={styles.section}>
        <div className={styles.info}>
          <h1>
            Eksiksiz bir sekilde Flexbox ögren
          </h1>
          <p>
            Flexbox her frontend geliştirme projesi için kullanılması gereken bir css özeliğidir.
            Flexbox&apos;ın kullanımı, web uygulamalarının responsive olması, kullanıcı arayüzünün
            düzenlenmesi,kullanıcı arayüzünün kullanımının kolaylaştırılması,
            kullanıcı arayüzünün daha kolay yönetilmesi gibi özellikleri sağlar.
            Bu özellikleri kullanırken, web uygulamalarının daha kolay yönetilmesi ve daha
            kullanıcı dostu olması için kullanılması gereken bir css özelliğidir.
          </p>
          <p>
            Flexbox&apos;ı ögrenmek ve pratik yapmak için bu aracı kullanabilirsiniz.
          </p>
        </div>
        <div className={styles.iconWrapper}>
          <i className={styles.icon} />
        </div>
      </section>
    </div>
  );
}
