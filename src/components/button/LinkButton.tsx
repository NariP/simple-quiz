import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { baseAction, baseStyle, outlineBase, textBase } from '@/components/button/components';
import Text from '@/components/text';
import type { Colors, Variants } from '@/components/button/components';
import type { ComponentPropsWithoutRef, Ref } from 'react';
import type { To } from 'react-router-dom';

interface LinkButtonProps {
  variant?: Variants;
  color?: Colors;
  isFull?: boolean;
}

type SpanProps = ComponentPropsWithoutRef<'span'> & LinkButtonProps & { href?: undefined };
type LinkProps = ComponentPropsWithoutRef<'a'> & LinkButtonProps & { href: To };

type PolymorphicProps = SpanProps | LinkProps;

const LinkButton = forwardRef<HTMLAnchorElement | HTMLSpanElement, PolymorphicProps>(
  (props, ref) => {
    const { children, variant = 'outline', color = 'default', isFull, ...rest } = props;

    const commonCss = [
      baseStyle,
      variant === 'outline' ? outlineBase[color] : textBase[color],
      isFull && { width: '100%' },
      { display: 'inline-flex' },
    ];

    if (isAnchor(rest) && isAnchorRef(ref)) {
      const { href, ...restAttr } = rest;
      if (typeof href === 'string' && isExternalUrl(href)) {
        return (
          <a
            css={[baseAction, commonCss]}
            href={href}
            draggable={false}
            target="_blank"
            rel="noreferrer"
            {...restAttr}
          >
            <Text css={{ color: 'inherit' }} variant="button" size="medium">
              {children}
            </Text>
          </a>
        );
      }

      return (
        <Link css={[baseAction, commonCss]} draggable={false} ref={ref} to={href} {...restAttr}>
          <Text css={{ color: 'inherit' }} variant="button" size="medium">
            {children}
          </Text>
        </Link>
      );
    }

    return (
      <Text
        aria-disabled={true}
        css={[commonCss]}
        ref={ref}
        variant="button"
        size="medium"
        {...rest}
      >
        {children}
      </Text>
    );
  }
);

const isAnchor = (props: PolymorphicProps): props is LinkProps => {
  return 'href' in props && props.href != undefined;
};

const isAnchorRef = (
  _ref: Ref<HTMLAnchorElement | HTMLSpanElement>
): _ref is Ref<HTMLAnchorElement> => true;

const isExternalUrl = (url: string) => /^(http|https)?:\/\//.test(url);

LinkButton.displayName = 'LinkButton';

export default LinkButton;
