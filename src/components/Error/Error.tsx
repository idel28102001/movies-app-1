import './Error.scss';
import { Component } from 'react';
import { Alert } from 'antd';
import { Offline, Online } from 'react-detect-offline';

import { ErrorInterface } from '../../hooks/useFetching';

interface ErrorProps {
  errorText: ErrorInterface;
}

export default class Error extends Component<ErrorProps, unknown> {
  render() {
    return (
      <div className="error">
        <Online>
          <Alert
            message={this.props.errorText.message}
            description={this.props.errorText.description}
            type="error"
            closable
          />
        </Online>
        <Offline>
          <Alert message="Ошибка подключения" description="Подключите интернет" type="warning" closable />
        </Offline>
      </div>
    );
  }
}
