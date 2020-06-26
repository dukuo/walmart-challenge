import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withRouter } from 'next/router';
import NextLink from 'next/link';
import MuiLink from '@material-ui/core/Link';

function NextComposed(props:any) {
  const { as, href, prefetch, forwardedRef, ...other } = props;

  return (
    <NextLink href={href} prefetch={prefetch} as={as}>
      <a ref={forwardedRef} {...other} />
    </NextLink>
  );
}
const NextComposedWithRef = React.forwardRef((props, ref) => <NextComposed {...props} forwardedRef={ref} />);

NextComposed.propTypes = {
  as: PropTypes.string,
  href: PropTypes.string,
  prefetch: PropTypes.bool,
  forwardedRef: PropTypes.any.isRequired
};

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function Link(props:any) {
  const { activeClassName, router, className: classNameProps, innerRef, naked, ...other } = props;

  const className = clsx(classNameProps, {
    [activeClassName]: router && router.pathname === props.href && activeClassName,
  });

  if (naked) {
    return <NextComposed className={className} ref={innerRef} {...other} />;
  }

  return <MuiLink component={NextComposedWithRef} className={className} ref={innerRef} {...other} />;
}

Link.propTypes = {
  activeClassName: PropTypes.string,
  as: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  naked: PropTypes.bool,
  onClick: PropTypes.func,
  prefetch: PropTypes.bool,
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

Link.defaultProps = {
  activeClassName: 'active',
};

const RouterLink = withRouter(Link);

export default React.forwardRef((props:any, ref) => <RouterLink {...props} innerRef={ref} />);