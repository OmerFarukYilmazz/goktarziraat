function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
      <span className="ml-4 text-secondary">Yükleniyor...</span>
    </div>
  );
}

export default LoadingSpinner; 