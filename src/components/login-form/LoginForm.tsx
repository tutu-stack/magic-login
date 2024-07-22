import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import Apple from '../ui/icons/apple';
import X from '../ui/icons/x/X';

type FormValues = {
  email: string;
  password: string;
};
const LoginForm = () => {
  const { register, formState, handleSubmit } = useForm<FormValues>();
  const { errors } = formState;
  const onSubmit = (data: FormValues) => {
    console.log('data', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <div className="relative">
          <input
            id="email"
            type="text"
            placeholder="Email address"
            className={clsx('peer input input-bordered w-full placeholder-transparent', errors.email?.message && 'input-error')}
            {...register('email', {
              required: 'email cannot be empty',
              pattern: { value: /[a-zA-Z0-9]@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,}/, message: 'Invalid email format' },
            })}
          />
          <label
            htmlFor="email"
            className={clsx(
              'pointer-events-none bg-white text-neutral-600 py-1 px-2 -mt-1',
              'absolute left-3 top-0',
              'origin-[0_0] scale-[0.8] -translate-y-2.5',
              'transition-all ease-out duration-200',
              'peer-placeholder-shown:scale-[1]',
              'peer-placeholder-shown:text-neutral-400',
              'peer-placeholder-shown:translate-y-2.5',
              'peer-focus:scale-[0.8]',
              'peer-focus:text-neutral-600',
              'peer-focus:-translate-y-2.5',
            )}
          >
            Email address
          </label>
        </div>
        <div className="label">
          <span className={clsx('label-text-alt text-error', !errors.email?.message && 'hidden')}>{errors.email?.message}</span>
        </div>
      </div>

      <div className="form-control">
        <div className="relative">
          <input
            id="password"
            type="password"
            placeholder="Password"
            className={clsx('peer input input-bordered w-full placeholder-transparent', errors.email?.message && 'input-error')}
            {...register('password', {
              required: 'password cannot be empty',
            })}
          />
          <label
            htmlFor="password"
            className={clsx(
              'pointer-events-none bg-white text-neutral-600 py-1 px-2 -mt-1',
              'absolute left-3 top-0',
              'origin-[0_0] scale-[0.8] -translate-y-2.5',
              'transition-all ease-out duration-200',
              'peer-placeholder-shown:scale-[1]',
              'peer-placeholder-shown:text-neutral-400',
              'peer-placeholder-shown:translate-y-2.5',
              'peer-focus:scale-[0.8]',
              'peer-focus:text-neutral-600',
              'peer-focus:-translate-y-2.5',
            )}
          >
            Password
          </label>
        </div>
        <div className="label">
          <span className={clsx('label-text-alt text-error', !errors.password?.message && 'hidden')}>{errors.password?.message}</span>
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="remember" className="label cursor-pointer flex justify-start">
          <input id="remember" type="checkbox" className="checkbox" defaultChecked />
          <span className="label-text ml-2">Remember me</span>
        </label>
      </div>

      <button className="btn btn-active btn-neutral btn-block my-4">LOGIN</button>

      <div className="divider">OR</div>
      <button className="btn btn-active btn-neutral btn-block mt-4">
        <Apple />
        CONTINUE WITH APPLE
      </button>
      <button className="btn btn-active btn-neutral btn-block mt-4">
        <X />
        CONTINUE WITH X
      </button>
    </form>
  );
};

export default LoginForm;
