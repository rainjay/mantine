import React from 'react';
import {
  mergeStyles,
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  MantineColor,
  ClassNames,
  useUuid,
} from '@mantine/styles';
import useStyles from './Switch.styles';

export type SwitchStylesNames = ClassNames<typeof useStyles>;

export interface SwitchProps
  extends DefaultProps<SwitchStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Switch label */
  label?: React.ReactNode;

  /** Switch checked state color from theme.colors, defaults to theme.primaryColor */
  color?: MantineColor;

  /** Predefined size value */
  size?: MantineSize;

  /** Predefined border-radius value from theme.radius or number for border-radius in px */
  radius?: MantineNumberSize;

  /** Props spread to wrapper element */
  wrapperProps?: React.ComponentPropsWithoutRef<'div'> & { [key: string]: any };

  /** Get element ref */
  elementRef?: React.ForwardedRef<HTMLInputElement>;
}

export function Switch({
  className,
  color,
  label,
  id,
  style,
  size = 'sm',
  radius = 'xl',
  wrapperProps,
  elementRef,
  children,
  classNames,
  styles,
  ...others
}: SwitchProps) {
  const { classes, cx } = useStyles({ size, color, radius }, classNames, 'switch');
  const _styles = mergeStyles(classes, styles);
  const uuid = useUuid(id);

  return (
    <div
      className={cx(classes.root, className)}
      style={{ ...style, ..._styles.root }}
      {...wrapperProps}
    >
      <input
        {...others}
        id={uuid}
        ref={elementRef}
        type="checkbox"
        className={classes.input}
        style={_styles.input}
      />

      {label && (
        <label className={classes.label} htmlFor={uuid} style={_styles.label}>
          {label}
        </label>
      )}
    </div>
  );
}

Switch.displayName = '@mantine/core/Switch';
