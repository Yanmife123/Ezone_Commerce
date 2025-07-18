import { useState, useEffect } from "react";
import { X, CheckCircle } from "lucide-react";
import { Images } from "../constant";
const Toast = ({
  message = "Login Successful",
  subtitle = "Welcome back, User",
  status,

  onClose,
  autoClose = false,
  duration = 4000,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setTimeout(() => setIsAnimating(true), 100);

    if (autoClose) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [autoClose, duration]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      onClose && onClose();
    }, 300);
  };

  const typeStyles = {
    success:
      "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 text-green-800",
    error:
      "bg-gradient-to-r from-red-50 to-rose-50 border-red-200 text-red-800",
  };

  const iconStyles = {
    success: "text-green-500",
    error: "text-red-500",
    warning: "text-amber-500",
    info: "text-blue-500",
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-15 right-4 z-[9999] pointer-events-none">
      <div
        className={`
          pointer-events-auto
          transform transition-all duration-300 ease-out
          ${
            isAnimating
              ? "translate-x-0 opacity-100 scale-100"
              : "translate-x-full opacity-0 scale-95"
          }
        `}
      >
        <div
          className={`
          ${typeStyles[status ? "success" : "error"]}
          backdrop-blur-md
          border
          rounded-2xl
          shadow-lg shadow-black/10
          p-3
          min-w-[250px]
          max-w-[300px]
          relative
          overflow-hidden
        `}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-current rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-current rounded-full blur-xl"></div>
          </div>

          {/* Progress bar */}
          {autoClose && (
            <div className="absolute top-0 left-0 h-1 bg-current opacity-20 rounded-full animate-pulse">
              <div
                className="h-full bg-current rounded-full transition-all duration-300"
                style={{
                  width: isAnimating ? "100%" : "0%",
                  transition: `width ${duration}ms linear`,
                }}
              ></div>
            </div>
          )}

          <div className="relative flex items-center gap-3">
            {/* Avatar with glow effect */}
            <div className="relative">
              <img
                src={status ? Images.success : Images.failed}
                alt="user"
                className="w-8 h-8 rounded-full ring-2 ring-white/50 shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-gray-900 mb-1 text-sm">
                    {message}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {subtitle}
                  </p>
                </div>

                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="ml-2 p-1 hover:bg-black/5 rounded-full transition-colors duration-200 flex-shrink-0"
                >
                  <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 -translate-x-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
