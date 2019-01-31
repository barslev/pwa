import React from 'react';
import PropTypes from 'prop-types';
import { Theme } from '@shopgate/pwa-common/context';
import CountdownTimer from '@shopgate/pwa-common/components/CountdownTimer';
import Link from '@shopgate/pwa-common/components/Link';
import Grid from '@shopgate/pwa-common/components/Grid';
import ProductImage from 'Components/ProductImage';
import Discount from '../Discount';
import Price from '../Price';
import { getLiveshoppingTimeout } from './helpers';
import styles from './style';

/**
 * The LiveShoppingItem component.
 * @param {Object} props The component props.
 * @param {string} props.productId The product id.
 * @returns {JSX}
 */
function LiveshoppingItem({ productId }) {
  return (
    <Theme>
      {({ ProductCard }) => (
        <ProductCard
          productId={productId}
          style={styles.card}
          render={({ product, url }) => {
            const {
              featuredImageUrl,
              liveshoppings,
              name,
              price,
            } = product;
            const timeout = getLiveshoppingTimeout(liveshoppings);

            return (
              <Link href={url} state={{ title: name }}>
                <Grid>
                  <Grid.Item className={styles.image}>
                    <ProductImage src={featuredImageUrl} alt={name} />
                  </Grid.Item>
                  <Grid.Item className={styles.infoPane}>
                    <div data-test-id={name}>
                      {price.discount > 0 &&
                        <Discount discount={price.discount} productId={productId} />
                      }
                      <ProductCard.Title title={name} style={styles.title} />
                      {timeout &&
                        <CountdownTimer className={styles.timer} timeout={timeout / 1000} />
                      }
                    </div>
                    <Price price={price} />
                  </Grid.Item>
                </Grid>
              </Link>
            );
          }}
        />
      )}
    </Theme>
  );
}

LiveshoppingItem.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default LiveshoppingItem;