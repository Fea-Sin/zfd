import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as moment from 'moment';
import interopDefault from '../_util/interopDefault';
import { changeConfirmLocale } from '../modal/locale';

export interface Locale {
  locale: string;
}

export interface LocaleProviderProps {
  locale: Locale;
  children: React.ReactNode;
}

function setMomentLocale(locale: Locale) {
  if (locale && locale.locale) {
    interopDefault(moment).locale(locale.locale);
  } else {
    interopDefault(moment).locale('en');
  }
}

export default class LocaleProvider extends React.Component<LocaleProviderProps, any> {
  static propTypes = {
    locale: PropTypes.object,
  };

  static defaultProps = {
    locale: {},
  };

  static childContextType = {
    antLocale: PropTypes.object,
  };

  constructor(props: LocaleProviderProps) {
    super(props);
    setMomentLocale(props.locale);
    // changeConfirmLocale(props.locale && props.locale.Modal);
  }

  getChildContext() {
    return {
      antLocale: {
        ...this.props.locale,
        exist: true,
      },
    };
  }

  componentDidUpdate(prevProps: LocaleProviderProps) {
    const { locale } = this.props;
    if (prevProps.locale !== locale) {
      setMomentLocale(locale);
    }
    // changeConfirmLocale(locale && locale.Modal)
  }
  componentWillUnmount() {
    changeConfirmLocale();
  }

  render() {
    return React.Children.only(this.props.children);
  }
}
