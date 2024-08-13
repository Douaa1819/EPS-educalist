import Link from 'next/link';

const AccessDenied = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-900">
      <h1 className="text-4xl font-bold mb-4 text-red-500">Access Denied</h1>
      <p className="text-lg mb-4">You are banned from accessing this site.</p>
      <Link href="/" className="text-blue-500">Go back to Home
      </Link>
    </div>
  );
};

export default AccessDenied;
