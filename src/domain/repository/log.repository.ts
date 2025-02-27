import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

export abstract class LogRepository {
	forEach(arg0: (logRepository: any) => void) {
		throw new Error("Method not implemented.");
	}
	abstract saveLog(log: LogEntity): Promise<void>;
	abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}
