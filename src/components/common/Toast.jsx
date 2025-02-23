import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle, FaTimesCircle, FaInfoCircle } from 'react-icons/fa';

function Toast({ message, type = 'success', duration = 3000, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: <FaCheckCircle className="text-green-500 text-xl" />,
    error: <FaTimesCircle className="text-red-500 text-xl" />,
    info: <FaInfoCircle className="text-blue-500 text-xl" />
  };

  return (
    <div
      className={`fixed bottom-24 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-3">
        {icons[type]}
        <p className="text-rich-dark">{message}</p>
      </div>
    </div>
  );
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'info']),
  duration: PropTypes.number,
  onClose: PropTypes.func
};

export default Toast; 