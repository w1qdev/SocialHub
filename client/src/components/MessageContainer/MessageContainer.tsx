import { motion } from 'framer-motion';
import './MessageContainer.scss';
import { MessageContainerProps } from './MessageContainer.props';

export default function MessageContainer({
    userId,
    text,
    time,
}: MessageContainerProps) {
    return (
        <div
            className="message-container"
            style={{ justifyContent: `${userId === '1' ? 'end' : 'start'}` }}
        >
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: 0.3 }}
                exit={{ scale: 0.95, opacity: 0, transition: 0.2 }}
                transition={{ duration: 0.4 }}
                className="message-container__item"
            >
                <div className="message-container__text">{text}</div>
                <div className="message-container__time">{time}</div>
            </motion.div>
        </div>
    );
}
