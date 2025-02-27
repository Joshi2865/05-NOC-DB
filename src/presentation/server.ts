import { mongo } from "mongoose";
import { envs } from "../config/plugins/envs.plugin";
import { MongoDatabase } from "../data/mongo";
import { LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { SendEmailLogs } from "../domain/use-cases/checks/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.servic";

const fsLogRepository = new LogRepositoryImpl(new FileSystemDatasource());
const mongoLogRepository = new LogRepositoryImpl(new MongoLogDatasource());
const postgresLogRepository = new LogRepositoryImpl(
	new PostgresLogDatasource()
);

const emailService = new EmailService();

export class Server {
	public static async start() {
		console.log("Server started...");

		//todo Mandar Email
		// new SendEmailLogs(emailService, fileSystemLogRepository).execute([
		// 	"tilinosanchez69@gmail.com",
		// ]);

		// emailService.sendEmailWithFileSystemLogs(["tilinosanchez69@gmail.com"]);

		// const logs = await logRepository.getLogs(LogSeverityLevel.low);
		// console.log(logs);

		// CronService.createJob("*/6 * * * * *", () => {
		// 	const url = "https://google.com";
		// 	new CheckServiceMultiple(
		// 		[fsLogRepository, postgresLogRepository, mongoLogRepository],
		// 		() => console.log(`${url} is ok`),
		// 		(error) => console.log(error)
		// 	).execute(url);
		// });
	}
}
