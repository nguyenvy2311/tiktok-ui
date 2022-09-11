import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="data:image/jpeg;base64,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"
                alt="avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nva</span>
            </div>
        </div>
    );
}

export default AccountItem;
