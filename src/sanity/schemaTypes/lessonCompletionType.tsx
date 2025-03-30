import Image from "next/image";
import { defineField, defineType } from "sanity";
import { urlFor } from "../lib/image";

export const lessonCompletionType = defineType({
    name: 'lessonCompletion',
    title: 'Lesson Completion',
    type: 'document',
    fields: [
        defineField({
            name: 'student',
            title: 'Student',
            type: 'reference',
            to: [{ type: 'student' }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'lesson',
            title: 'Lesson',
            type: 'reference',
            to: [{ type: 'lesson' }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'module',
            title: 'Module',
            type: 'reference',
            to: [{ type: 'module' }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'course',
            title: 'Course',
            type: 'reference',
            to: [{ type: 'course' }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'completedAt',
            title: 'Completed At',
            type: 'datetime',
            validation: (rule) => rule.required(),
        }),
    ],
    preview: {
        select: {
            lessonTitle: 'lesson.title',
            courseTitle: 'course.title',
            completedAt: 'completedAt',
            courseImage: 'course.image',
        },
        prepare(selection) {
            const { courseTitle, lessonTitle, completedAt, courseImage } = selection
            return {
                title: `${courseTitle || 'Course'}: "${lessonTitle || 'Lesson'}"`,
                subtitle: completedAt ? new Date(completedAt).toLocaleDateString() : "",
                media: courseImage && <Image
                    src={urlFor(courseImage).url()}
                    alt={courseTitle}
                    width={50}
                    height={50}
                />,
            }
        },
    },
})