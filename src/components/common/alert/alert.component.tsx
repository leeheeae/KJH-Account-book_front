import {
    ExclamationTriangleIcon,
    ExclamationCircleIcon,
    InformationCircleIcon,
    CheckCircleIcon,
} from '@heroicons/react/24/solid';

export interface IAlert {
    severity: 'error' | 'warning' | 'info' | 'success';
    message: string;
}

export default function Alert({
    severity,
    message = 'This is an error alert — check it out!',
}: IAlert) {
    switch (severity) {
        case 'error':
            return (
                <div className="bg-red-50 p-3 flex flex-row items-center w-8/12">
                    <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
                    <p className="ml-1 text-red-800 text-base font-medium">
                        {message}
                    </p>
                </div>
            );

        case 'warning':
            return (
                <div className="bg-yellow-50 p-3 flex flex-row items-center w-8/12">
                    <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500" />
                    <p className="ml-1 text-yellow-800 text-base font-medium">
                        {message}
                    </p>
                </div>
            );

        case 'info':
            return (
                <div className="bg-blue-50 p-3 flex flex-row items-center w-8/12">
                    <InformationCircleIcon className="h-6 w-6 text-blue-500" />
                    <p className="ml-1 text-blue-800 text-base font-medium">
                        {message}
                    </p>
                </div>
            );

        case 'success':
            return (
                <div className="bg-green-50 p-3 flex flex-row items-center w-8/12">
                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                    <p className="ml-1 text-green-800 text-base font-medium">
                        {message}
                    </p>
                </div>
            );

        default:
            return null;
    }
}
