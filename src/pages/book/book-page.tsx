import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import avatarRating from '../../assets/img/avatarRating.png';
import { CardButton } from '../../components/card-button/card-button';
import { Rating } from '../../components/rating';
import { SwiperAdd } from '../../components/swiper/swiper';
import { books } from '../../constans/books';
import { elementsNav } from '../../constans/navigation-bar';

import styles from './book-page.module.scss';

export const BookPage = () => {
  const [isReviews, setIsReviews] = useState(false);

  function handleToggleReviews() {
    setIsReviews(!isReviews);
  }
  const { id } = useParams();

  const book = books.find((elBook) => elBook.id.toString() === id);

  return (
    <div>
      {book && (
        <React.Fragment>
          <div className={styles.breadCrumbs}>
            <nav>
              <p>
                <Link to={`/books/${book.category}`}>
                  {elementsNav[0].categories?.find((el) => el.id === book.category)?.title}
                </Link>{' '}
                / <span>{book.title}</span>
              </p>
            </nav>
          </div>

          <div className={styles.wrapper}>
            <div className={styles.container}>
              <SwiperAdd book={book} />
              <div className={styles.characteristics}>
                <h3 className={styles.mainTitle}>{book.title}</h3>
                <p className={styles.author}>{book.author}</p>
                <div className={styles.cardBtn}>
                  <CardButton reserve={book.reserve} data={book.data} />
                </div>
                <p className={`${styles.text} ${styles.descr}`}>
                  <span>О книге</span>
                  Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были
                  кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального
                  Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на
                  это свое время?
                  <br />
                  <br /> Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А
                  грокать алгоритмы — это веселое и увлекательное занятие.
                </p>
              </div>
            </div>
            <p className={`${styles.text} ${styles.minDescr}`}>
              <span className={styles.title}>О книге</span>
              Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
              решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
              изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
              время?
              <br />
              <br /> Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А
              грокать алгоритмы — это веселое и увлекательное занятие.
            </p>
            <div className={styles.reviewsWrapper}>
              <div className={styles.rating}>
                <p className={styles.title}>Рейтинг</p>
                <div className={styles.stars}>
                  <Rating book={book} />
                </div>
              </div>
            </div>
            <p className={styles.title}>Подробная информация</p>
            <div className={styles.moreInfo}>
              <div className={styles.catBlock}>
                <div className={styles.valueKey}>
                  <p className={styles.textKey}>Издательство</p>
                  <p className={styles.textMeaning}>Питер</p>
                </div>
                <div className={styles.valueKey}>
                  <p className={styles.textKey}>Год издания</p>
                  <p className={styles.textMeaning}>2019</p>
                </div>
                <div className={styles.valueKey}>
                  <p className={styles.textKey}>Страниц</p>
                  <p className={styles.textMeaning}>288</p>
                </div>
                <div className={styles.valueKey}>
                  <p className={styles.textKey}>Переплёт</p>
                  <p className={styles.textMeaning}>Мягкая обложка</p>
                </div>
                <div className={styles.valueKey}>
                  <p className={styles.textKey}>Формат</p>
                  <p className={styles.textMeaning}>70x100</p>
                </div>
              </div>
              <div className={styles.catBlock}>
                <div className={styles.valueKey}>
                  <p className={styles.textKey}>Жанр</p>
                  <p className={styles.textMeaning}>Компьютерная литература</p>
                </div>
                <div className={styles.valueKey}>
                  <p className={styles.textKey}>Вес</p>
                  <p className={styles.textMeaning}>370 г</p>
                </div>
                <div className={styles.valueKey}>
                  <p className={styles.textKey}>ISBN</p>
                  <p className={styles.textMeaning}>978-5-4461-0923-4</p>
                </div>
                <div className={styles.valueKey}>
                  <p className={styles.textKey}>Изготовитель</p>
                  <p className={styles.textMeaning}>
                    ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29
                  </p>
                </div>
              </div>
            </div>
            <p className={`${styles.titleReviews} ${isReviews ? styles.line : ''}`}>
              Отзывы <span>1</span>
              <div
                role='presentation'
                className={`${isReviews ? styles.dropDown : ''} ${styles.dropUp} `}
                data-test-id='button-hide-reviews'
                onClick={handleToggleReviews}
              />
            </p>
            {isReviews && (
              <div className={styles.reviewsWrapper}>
                <div>
                  <div className={styles.userInfo}>
                    <img className={styles.avatar} src={avatarRating} alt='avatar' />
                    <div className={styles.name}>
                      <p className={styles.userName}>Иван Иванов</p>
                      <p className={styles.publicationDate}>5 января 2019</p>
                    </div>
                  </div>
                </div>
                <div className={styles.textWrapper}>
                  <p className={styles.text}>
                    Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не
                    оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение
                    современных методик предоставляет широкие возможности для позиций, занимаемых участниками в
                    отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики
                    выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций —
                    глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет
                    сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в
                    посмешище, хотя само их существование приносит несомненную пользу обществу.
                  </p>
                </div>
              </div>
            )}
            <button type='button'>оценить книгу</button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
