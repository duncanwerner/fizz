
import { Fizz } from './fizz';

// main page for webpack. pollute the global namespace.

(self as any).Fizz = Fizz;

